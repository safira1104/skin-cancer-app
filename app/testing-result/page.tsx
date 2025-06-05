"use client";

import { useEffect, useState } from "react";
import TestingCard from "../../components/testing-card";

type TestingResultItem = {
  filename: string;
  predicted_label: string;
  true_label: string;
  correct: boolean;
  image_url: string;
};


export default function TestingResultPage() {
  const [results, setResults] = useState<TestingResultItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/testing-results")
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []);

  return (
    <div className="p-6 min-h-screen">
    <main className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Hasil Pengujian Model</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((item, index) => {
          const imageUrl = `http://localhost:5000${item.image_url.replace(/\\/g, '/')}`;

          return (
            <TestingCard
              key={index}
              image_url={imageUrl}
              prediction={item.predicted_label}
              label={item.true_label}
              status={item.correct ? "Benar" : "Salah"}
            />
          );
        })}
      </div>
    </main>
    </div>
  );
}

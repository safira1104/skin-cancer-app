"use client";

import TestingCard from "../../components/testing-card";

const results = [
  { filename: "1", predicted_label: "Melanoma", true_label: "Nevus", correct: false },
  { filename: "2", predicted_label: "Nevus", true_label: "Nevus", correct: true },
  { filename: "3", predicted_label: "BCC", true_label: "Melanoma", correct: false },
  { filename: "4", predicted_label: "Melanoma", true_label: "Melanoma", correct: true },
  { filename: "5", predicted_label: "BCC", true_label: "BCC", correct: true },
  { filename: "6", predicted_label: "Nevus", true_label: "Melanoma", correct: false },
  { filename: "7", predicted_label: "Melanoma", true_label: "BCC", correct: false },
  { filename: "8", predicted_label: "Nevus", true_label: "Nevus", correct: true },
  { filename: "9", predicted_label: "BCC", true_label: "Nevus", correct: false },
  { filename: "10", predicted_label: "Melanoma", true_label: "Melanoma", correct: true },
];

export default function TestingResultPage() {
  return (
    <main className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Hasil Pengujian Model</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((item, index) => (
          <TestingCard
            key={index}
            prediction={item.predicted_label}
            label={item.true_label}
            status={item.correct ? "Benar" : "Salah"}
          />
        ))}
      </div>
    </main>
  );
}

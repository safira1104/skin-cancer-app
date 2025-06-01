"use client";

import { useEffect, useState } from "react";

export default function ClassificationReportPage() {
  const [trainingPlot, setTrainingPlot] = useState<string | null>(null);
  const [confMatrix, setConfMatrix] = useState<string | null>(null);
  const [report, setReport] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/plot")
      .then((res) => res.json())
      .then((data) => setTrainingPlot(`data:image/png;base64,${data.image}`));

    fetch("http://localhost:5000/api/confusion-matrix")
      .then((res) => res.json())
      .then((data) => setConfMatrix(`data:image/png;base64,${data.image}`));

    fetch("http://localhost:5000/api/classification-report")
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Laporan Klasifikasi</h1>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Confusion Matrix</h2>
        {confMatrix ? (
          <img src={confMatrix} alt="Confusion Matrix" className="rounded-lg shadow" />
        ) : (
          <p>Memuat confusion matrix...</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Plot Training</h2>
        {trainingPlot ? (
          <img src={trainingPlot} alt="Training Plot" className="rounded-lg shadow" />
        ) : (
          <p>Memuat gambar...</p>
        )}
      </div>

      

      <div>
        <h2 className="text-lg font-semibold mb-2">Classification Report</h2>
        {report ? (
          <table className="w-full text-sm border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Label</th>
                <th className="border p-2">Precision</th>
                <th className="border p-2">Recall</th>
                <th className="border p-2">F1-score</th>
                <th className="border p-2">Support</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(report).map(([label, values]) => {
                if (typeof values !== "object") return null;
                return (
                  <tr key={label} className="bg-rose-300">
                    <td className="border p-2">{label}</td>
                    <td className="border p-2">{values.precision?.toFixed(2)}</td>
                    <td className="border p-2">{values.recall?.toFixed(2)}</td>
                    <td className="border p-2">{values["f1-score"]?.toFixed(2)}</td>
                    <td className="border p-2">{values.support}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>Memuat laporan klasifikasi...</p>
        )}
      </div>
    </main>
  );
}

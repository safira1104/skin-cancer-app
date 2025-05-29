'use client';

import { useEffect, useState } from 'react';

type SummaryItem = {
  label: string;
  count: number;
};

export default function Summary7Class() {
  const [summaryData, setSummaryData] = useState<SummaryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/summary-7class')
      .then((res) => res.json())
      .then((data) => {
        const entries = Object.entries(data).map(([label, count]) => ({
          label,
          count: Number(count),
        }));
        setSummaryData(entries);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal fetch data:', err);
        setLoading(false);
      });
  }, []);



  const totalCount = summaryData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-10 rounded-xl shadow-lg max-w-full w-full flex justify bg-white">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border border-pink-500 px-6 py-3 text-pink-700 font-semibold text-lg">Skin Lesion</th>
              <th className="border border-pink-500 px-6 py-3 text-pink-700 font-semibold text-lg">Total Images</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={2} className="py-6 text-pink-700">Loading...</td>
              </tr>
            ) : (
              <>
                {summaryData.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-pink-500 px-6 py-3 text-pink-700">{item.label}</td>
                    <td className="border border-pink-500 px-6 py-3 text-pink-700">{item.count}</td>
                  </tr>
                ))}
                <tr>
                  <td className="border border-pink-500 px-6 py-3 text-pink-700 font-bold">Total</td>
                  <td className="border border-pink-500 px-6 py-3 text-pink-700 font-bold">{totalCount}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

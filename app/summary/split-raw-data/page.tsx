'use client';

import React from 'react';

export default function SplitRawDataPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-pink-300 p-8 rounded-lg shadow-md">
        <table className="table-auto border-collapse border border-pink-500 text-center text-pink-600 bg-pink-100">
          <thead>
            <tr className="bg-pink-100">
              <th className="border border-pink-500 px-4 py-2">Skin Lesion</th>
              <th className="border border-pink-500 px-4 py-2">Training Images</th>
              <th className="border border-pink-500 px-4 py-2">Validating Images</th>
              <th className="border border-pink-500 px-4 py-2">Testing Images</th>
              <th className="border border-pink-500 px-4 py-2">Total Images</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-pink-500 px-4 py-2">Malignant</td>
              <td className="border border-pink-500 px-4 py-2">533</td>
              <td className="border border-pink-500 px-4 py-2">121</td>
              <td className="border border-pink-500 px-4 py-2">187</td>
              <td className="border border-pink-500 px-4 py-2">841</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2">Benign</td>
              <td className="border border-pink-500 px-4 py-2">872</td>
              <td className="border border-pink-500 px-4 py-2">231</td>
              <td className="border border-pink-500 px-4 py-2">253</td>
              <td className="border border-pink-500 px-4 py-2">1356</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 font-semibold">Total</td>
              <td className="border border-pink-500 px-4 py-2 font-semibold">1405</td>
              <td className="border border-pink-500 px-4 py-2 font-semibold">352</td>
              <td className="border border-pink-500 px-4 py-2 font-semibold">440</td>
              <td className="border border-pink-500 px-4 py-2 font-semibold">2179</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

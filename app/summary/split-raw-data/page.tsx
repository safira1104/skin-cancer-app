'use client';

import React, { useEffect, useState } from 'react';

type ImageItem = {
  image_id: string;
  age: number;
  sex: string;
  localization: string;
  dx_type: string;
  dx_label: string;
};

type CategoryData = {
  count: number;
  data: ImageItem[];
};

type ApiResponse = {
  count: number;
  data: {
    malignant?: CategoryData;
    benign?: CategoryData;
  };
};

const SplitRawDataPage: React.FC = () => {
  const [splitName, setSplitName] = useState<'train' | 'val' | 'test'>('train');
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/split/${splitName}`);
        if (!res.ok) throw new Error('Failed to fetch data');
        const json: ApiResponse = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [splitName]);

  const renderTable = (items: ImageItem[], category: 'malignant' | 'benign', count: number) => (
    <div className="mb-6">
      <h2 className={`text-xl font-bold mb-3 ${category === 'malignant' ? 'text-red-700' : 'text-green-700'}`}>
        Data {category.charAt(0).toUpperCase() + category.slice(1)} (10 Teratas)
      </h2>
      <p className="mb-2 text-sm text-gray-600">Jumlah gambar: {count}</p>
      <table className="w-full border border-gray-300">
        <thead className={category === 'malignant' ? 'bg-red-100' : 'bg-green-100'}>
          <tr>
            <th className="border px-2 py-1">Image ID</th>
            <th className="border px-2 py-1">Age</th>
            <th className="border px-2 py-1">Sex</th>
            <th className="border px-2 py-1">Localization</th>
            <th className="border px-2 py-1">DX Type</th>
            <th className="border px-2 py-1">DX Label</th>
          </tr>
        </thead>
        <tbody>
          {items.slice(0, 10).map((item, idx) => (
            <tr key={idx} className="text-center">
              <td className="border px-2 py-1">{item.image_id}</td>
              <td className="border px-2 py-1">{item.age}</td>
              <td className="border px-2 py-1">{item.sex}</td>
              <td className="border px-2 py-1">{item.localization}</td>
              <td className="border px-2 py-1">{item.dx_type}</td>
              <td className="border px-2 py-1">{item.dx_label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Summary Split Raw Data</h1>

      {/* Tombol pilihan split */}
      <div className="mb-5 space-x-3">
        {(['train', 'val', 'test'] as const).map(name => (
          <button
            key={name}
            onClick={() => setSplitName(name)}
            className={`px-4 py-2 rounded transition ${
              splitName === name
                ? 'bg-pink-500 text-white'
                : 'bg-white border border-pink-500 text-pink-700 hover:bg-pink-100'
            }`}
          >
            {name.toUpperCase()}
          </button>
        ))}
      </div>

      

      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {data && (
        <>
          {data.data.malignant && renderTable(data.data.malignant.data, 'malignant', data.data.malignant.count)}
          {data.data.benign && renderTable(data.data.benign.data, 'benign', data.data.benign.count)}
        </>
      )}
    </div>
  );
};

export default SplitRawDataPage;

'use client';

import { useSearchParams } from 'next/navigation';

export default function PredictionResultPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const size = searchParams.get('size');
  const type = searchParams.get('type');
  const imageUrl = searchParams.get('url');
  const prediction = searchParams.get('prediction');

  const predictionColor = prediction === 'Benign' ? 'text-pink-600' : 'text-pink-800';

  return (
    <div className="p-7 max-w-4xl mx-auto bg-pink-50 rounded-3xl shadow-lg border border-pink-300">
      <h1 className="text-3xl font-bold mb-6 text-pink-700 text-center">
        Hasil Prediksi
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {imageUrl && (
          <div className="flex-shrink-0">
            <img
              src={imageUrl}
              alt="Preview"
              className="rounded-xl shadow-lg w-48 h-48 object-cover border-4 border-pink-200"
            />
          </div>
        )}

        <div className="flex-1 space-y-4 text-left text-pink-900 text-base font-semibold w-full">
          <div className="flex justify-between border-b border-pink-200 pb-2">
            <span>Nama File: </span>
            <span className="break-words max-w-[80%] text-right">{name}</span>
          </div>
          <div className="flex justify-between border-b border-pink-200 pb-2">
            <span>Ukuran:</span>
            <span>{(Number(size) / (1024 * 1024)).toFixed(2)} MB</span>
          </div>
          <div className="flex justify-between border-b border-pink-200 pb-2">
            <span>Tipe:</span>
            <span>{type?.toUpperCase()}</span>
          </div>
          <div className="flex justify-between pt-3">
            <span>Prediksi:</span>
            <span className={`font-bold text-lg ${predictionColor}`}>
              {prediction}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-8 w-full py-3 rounded-full bg-pink-600 text-white font-bold hover:bg-pink-700 transition-shadow shadow-md"
      >
        Kembali
      </button>
    </div>
  );
}

'use client';

import { Upload } from 'lucide-react';

export default function TestingResultPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      {/* Kotak Unggah */}
      <div className="w-full max-w-md h-64 bg-pink-300 rounded-lg flex items-center justify-center shadow-md">
        <Upload size={48} className="text-white" />
      </div>

      {/* Tombol Unggah */}
      <button
        className="mt-4 px-6 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition"
        onClick={() => alert('Unggah diklik')}
      >
        Unggah
      </button>
    </div>
  );
}

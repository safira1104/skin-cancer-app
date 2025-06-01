'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DragAndDropUpload from '@/components/drag-and-drop-apload';

export default function Prediction() {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        const objectUrl = URL.createObjectURL(file);
        router.push(
          `/prediction/result?name=${encodeURIComponent(file.name)}&size=${file.size}&type=${encodeURIComponent(
            file.type
          )}&url=${encodeURIComponent(objectUrl)}&prediction=${encodeURIComponent(result.prediction)}`
        );
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-3xl p-6 w-[90%] max-w-xl text-center bg-white shadow-xl border border-pink-200">
        <DragAndDropUpload
          file={file}
          setFile={setFile}
          dragOver={dragOver}
          setDragOver={setDragOver}
        />

        <button
          disabled={!file}
          onClick={handleUpload}
          className={`mt-6 w-full py-3 rounded-full text-white font-semibold transition-shadow duration-300 ${
            file
              ? 'bg-pink-600 hover:bg-pink-700 shadow-lg shadow-pink-300'
              : 'bg-pink-300 cursor-not-allowed'
          }`}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import DragAndDropUpload from '@/components/DragAndDropUpload';

export default function Prediction() {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-3xl p-4 w-[90%] max-w-xl text-center bg-white shadow-lg">
        <DragAndDropUpload
          file={file}
          setFile={setFile}
          dragOver={dragOver}
          setDragOver={setDragOver}
        />

        <button
          disabled={!file}
          className={`mt-6 w-full py-2 rounded-full text-white font-semibold transition ${
            file ? 'bg-purple-500 hover:bg-purple-600' : 'bg-purple-300 cursor-not-allowed'
          }`}
          onClick={() => alert('Upload clicked')}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

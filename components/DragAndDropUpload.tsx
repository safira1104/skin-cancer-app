'use client';

import { useRef } from 'react';
import { UploadCloud, X } from 'lucide-react';

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
  dragOver: boolean;
  setDragOver: (value: boolean) => void;
};

export default function DragAndDropUpload({ file, setFile, dragOver, setDragOver }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleBrowse = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => setFile(null);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      className={`transition-colors bg-white border-2 border-dashed rounded-2xl p-10 shadow-xl ${
        dragOver ? 'border-purple-400' : 'border-[#d1cfff]'
      }`}
    >
      {file ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-24 h-24 object-cover rounded-md shadow"
          />
          <p className="text-gray-700 font-medium">{file.name}</p>
          <p className="text-sm text-gray-500">
            {(file.size / (1024 * 1024)).toFixed(2)} MB • {file.type.toUpperCase()}
          </p>
          <button onClick={removeFile} className="text-pink-500 hover:text-pink-700">
            <X size={24} />
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-4">
          <UploadCloud size={48} className="text-purple-500" />
          <p className="text-lg font-semibold text-gray-700">
            Drag & drop <span className="text-purple-600">images, videos</span>, or any file
          </p>
          <p className="text-sm text-gray-500">
            or{' '}
            <button
              className="text-purple-500 underline"
              onClick={() => fileInputRef.current?.click()}
            >
              browse files
            </button>{' '}
            on your computer
          </p>
          <input ref={fileInputRef} type="file" className="hidden" onChange={handleBrowse} />
        </div>
      )}
    </div>
  );
}

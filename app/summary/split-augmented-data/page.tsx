'use client';

import React, { useEffect, useState } from 'react';

const splits = ['train', 'val', 'test'];
const labels = ['malignant', 'benign'];

export default function SplitAugmentedDataPage() {
  const [images, setImages] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllImages = async () => {
      const tempImages: Record<string, string[]> = {};

      for (const split of splits) {
        for (const label of labels) {
          const key = `${split}_${label}`;
          try {
            const res = await fetch(`/api/augmented/${split}/${label}`);
            if (res.ok) {
              const data = await res.json();
              tempImages[key] = data.map((url: string) => `http://localhost:5000${url}`);
            } else {
              tempImages[key] = [];
            }
          } catch (err) {
            console.error(`Error fetching ${key}:`, err);
            tempImages[key] = [];
          }
        }
      }

      setImages(tempImages);
      setLoading(false);
    };

    fetchAllImages();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading augmented images...</p>;

  return (
    <div className="p-6 space-y-10">
      {splits.map((split) => (
        <div key={split}>
          <h2 className="text-2xl font-bold mb-4 capitalize text-pink-700">
            {split} Images
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {labels.map((label) => {
              const key = `${split}_${label}`;
              const imgs = images[key] || [].slice(0, 10); // hanya ambil 20 gambar pertama;

              return (
                <div key={key}>
                  <h3 className="text-lg font-semibold mb-2 text-gray-700 capitalize">
                    {label}
                  </h3>
                  {imgs.length === 0 ? (
                    <p className="text-sm text-gray-500">No images found</p>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 max-h-[300px] overflow-y-auto p-2 border rounded shadow-inner bg-white">
                      {imgs.map((url, idx) => (
                        <img
                          key={idx}
                          src={url}
                          alt={`${split} ${label} ${idx}`}
                          className="w-full h-24 object-cover rounded"
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

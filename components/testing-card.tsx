// components/testing-card.tsx
import React from "react";
import {
  Brain,
  BadgeCheck,
  CheckCircle,
  XCircle,
} from "lucide-react";

type TestingCardProps = {
  image_url: string;
  prediction: string;
  label: string;
  status: "Benar" | "Salah";
};

export default function TestingCard({
  image_url,
  prediction,
  label,
  status,
}: TestingCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-64 h-auto">
      <div className="w-full h-40 aspect-square bg-gray-100 rounded-md mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={image_url}
          alt="hasil prediksi"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-sm font-medium space-y-2">
        <div className="flex items-center gap-2 text-pink-700">
          <Brain className="w-4 h-4" />
          <span>Prediksi: {prediction}</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-600">
          <BadgeCheck className="w-4 h-4" />
          <span>Label Asli: {label}</span>
        </div>
        <div
          className={`flex items-center gap-2 ${
            status === "Benar" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status === "Benar" ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <XCircle className="w-4 h-4" />
          )}
          <span>Status: {status}</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import {
  Brain,
  BadgeCheck,
  CheckCircle,
  XCircle,
  FileText,
} from "lucide-react";

type TestingCardProps = {
  prediction: string;
  label: string;
  status: "Benar" | "Salah";
};

export default function TestingCard({ prediction, label, status }: TestingCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-64 h-72">
      <div className="w-full h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
        <FileText className="w-10 h-10 text-gray-400" />
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
        <div className={`flex items-center gap-2 ${status === "Benar" ? "text-green-600" : "text-red-600"}`}>
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

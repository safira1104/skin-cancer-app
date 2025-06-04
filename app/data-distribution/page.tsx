'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Data grafik
const genderData = [
  { name: 'Male', value: 5000 },
  { name: 'Female', value: 7000 },
  { name: 'Unknown', value: 500 },
];

const ageData = [
  { ageRange: '0-20', count: 500 },
  { ageRange: '21-40', count: 2300 },
  { ageRange: '41-60', count: 4500 },
  { ageRange: '61-80', count: 2600 },
  { ageRange: '81-100', count: 400 },
];

const localizationData = [
  { location: 'acral', count: 1200 },
  { location: 'trunk', count: 800 },
  { location: 'head/neck', count: 500 },
  { location: 'lower extremity', count: 950 },
  { location: 'upper extremity', count: 1100 },
];

const diagnosisData = [
  { diagnosis: 'melanoma', count: 3000 },
  { diagnosis: 'bcc', count: 2500 },
  { diagnosis: 'scc', count: 1800 },
  { diagnosis: 'other', count: 1000 },
];

// Warna Pie Chart
const COLORS = ['#f72585', '#fcbf49', '#7209b7'];

export default function DataDistributionPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Skin Cancer Data Distribution
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Gender Distribution */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-[350px] mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Gender Distribution</h2>
          <p className="text-sm mb-4">
            Visualisasi ini menunjukkan distribusi penderita kanker kulit berdasarkan jenis kelamin.
          </p>
          <div className="w-[300] h-48 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Age Distribution */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-[350px] mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Age Distribution</h2>
          <p className="text-sm mb-4">
            Grafik ini menggambarkan distribusi kasus kanker kulit berdasarkan kelompok usia.
          </p>
          <div className="w-[300] h-40 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <XAxis dataKey="ageRange" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#f72585" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Localization Distribution */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-[350px] mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Localization Distribution</h2>
          <p className="text-sm mb-4">
            Distribusi lokasi tubuh menunjukkan bagian tubuh yang paling sering menjadi tempat munculnya kanker kulit.
          </p>
          <div className="w-[300] h-40 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={localizationData}>
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#7209b7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Diagnosis Distribution */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-[350px] mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Diagnosis Distribution</h2>
          <p className="text-sm mb-4">
            Diagram ini menunjukkan jumlah kasus berdasarkan jenis diagnosis kanker kulit.
          </p>
          <div className="w-[300] h-40 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={diagnosisData}>
                <XAxis dataKey="diagnosis" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3a0ca3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
}

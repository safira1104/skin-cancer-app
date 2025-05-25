'use client'

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const COLORS = ['#E91E63', '#FFC107', '#673AB7']

const genderData = [
  { name: "Male", value: 1100 },
  { name: "Female", value: 1300 },
]

const ageData = [
  { age: '0-20', value: 300 },
  { age: '21-40', value: 800 },
  { age: '41-60', value: 700 },
  { age: '61-80', value: 500 },
  { age: '81-100', value: 100 },
]

const localizationData = [
  { area: 'Head/Neck', value: 400 },
  { area: 'Upper Extremity', value: 600 },
  { area: 'Lower Extremity', value: 500 },
  { area: 'Torso', value: 700 },
  { area: 'Palms/Soles', value: 200 },
]

const ChartCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md flex flex-col items-center">
    <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
    <div className="w-full h-80">{children}</div>
  </div>
)

export default function DataDistributionPage() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Data Distribution</h1>


      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
        <ChartCard title="Gender Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={genderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {genderData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <ChartCard title="Age Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageData}>
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#E91E63" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Localization Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={localizationData}>
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#673AB7" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </main>
  )
}

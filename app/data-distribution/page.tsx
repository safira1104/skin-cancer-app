'use client'

import { useEffect, useState } from 'react'
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

type ChartCardProps = {
  title: string
  children: React.ReactNode
  description?: string
}

const ChartCard = ({ title, children, description }: ChartCardProps) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md flex flex-col items-center">
    <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
    {description && <p className="text-sm text-gray-500 mb-4 text-center">{description}</p>}
    <div className="w-full h-80">{children}</div>
  </div>
)

type GenderItem = { name: string; value: number }
type AgeItem = { age: string; value: number }
type LocalizationItem = { area: string; value: number }
type DiagnosisItem = { name: string; value: number }

export default function DataDistributionPage() {
  const [genderData, setGenderData] = useState<GenderItem[]>([])
  const [ageData, setAgeData] = useState<AgeItem[]>([])
  const [localizationData, setLocalizationData] = useState<LocalizationItem[]>([])
  const [diagnosisData, setDiagnosisData] = useState<DiagnosisItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/distribution')
        if (!res.ok) throw new Error('Gagal memuat data')

        const data = await res.json()

        setGenderData([
          { name: 'Female', value: data.sex?.female ?? 0 },
          { name: 'Male', value: data.sex?.male ?? 0 },
          { name: 'Unknown', value: data.sex?.unknown ?? 0 }
        ])

        setAgeData(Object.entries(data.age_group ?? {}).map(([key, value]) => ({
          age: key,
          value: Number(value)
        })))

        setLocalizationData(Object.entries(data.localization ?? {}).map(([key, value]) => ({
          area: key,
          value: Number(value)
        })))

        setDiagnosisData(Object.entries(data.diagnosis ?? {}).map(([key, value]) => ({
          name: key.toUpperCase(),
          value: Number(value)
        })))

        setLoading(false)
      } catch (err: any) {
        setError(err.message || 'Terjadi kesalahan')
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Memuat data...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">{error}</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Data Distribution</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
        <ChartCard
          title="Gender Distribution"
          description="Visualisasi ini menunjukkan distribusi penderita kanker kulit berdasarkan jenis kelamin."
        >
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
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
        <ChartCard
          title="Age Distribution"
          description="Grafik ini menggambarkan distribusi kasus kanker kulit berdasarkan kelompok usia."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageData}>
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#E91E63" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Localization Distribution"
          description="Distribusi lokasi tubuh menunjukkan bagian tubuh yang paling sering menjadi tempat munculnya kanker kulit."
        >
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

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-10">
        <ChartCard
          title="Diagnosis Distribution"
          description="Diagram ini menunjukkan jumlah kasus berdasarkan jenis diagnosis kanker kulit."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={diagnosisData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FFC107" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </main>
  )
}

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

const ChartCard = ({ title, children,description }: { title: string, children: React.ReactNode, description:string }) => (
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
    <ChartCard
      title="Gender Distribution"
      description="Visualisasi ini menunjukkan distribusi penderita kanker kulit berdasarkan jenis kelamin. Dari data, terlihat bahwa jumlah kasus pada perempuan (1300) sedikit lebih tinggi dibandingkan laki-laki (1100). Hal ini menunjukkan bahwa kedua gender memiliki risiko relatif seimbang, tetapi terdapat kecenderungan sedikit lebih tinggi pada perempuan dalam dataset ini. Data ini penting untuk mengetahui apakah strategi pencegahan perlu disesuaikan berdasarkan jenis kelamin."
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
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  </div>

  <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
    <ChartCard
      title="Age Distribution"
      description="Grafik ini menggambarkan distribusi kasus kanker kulit berdasarkan kelompok usia. Kelompok usia 21–40 tahun (800 kasus) dan 41–60 tahun (700 kasus) mendominasi jumlah kasus, menunjukkan bahwa kanker kulit paling banyak terjadi pada usia produktif hingga paruh baya. Hal ini menjadi perhatian penting dalam strategi edukasi dan deteksi dini, karena kelompok usia ini umumnya aktif di luar ruangan dan berpotensi terpapar sinar UV lebih banyak."
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
      description="Distribusi lokasi tubuh menunjukkan bagian tubuh yang paling sering menjadi tempat munculnya kanker kulit. Area torso (punggung dan dada) menempati urutan tertinggi (700 kasus), disusul oleh ekstremitas atas seperti lengan (600 kasus) dan ekstremitas bawah (500 kasus). Temuan ini sesuai dengan literatur bahwa paparan sinar matahari pada bagian tubuh yang sering terbuka meningkatkan risiko kanker kulit. Data ini juga berguna sebagai referensi dalam pelatihan model klasifikasi citra berdasarkan lokasi lesi."
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
</main>
  )
}
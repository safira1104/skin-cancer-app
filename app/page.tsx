'use client'

export default function HomePage() {
  return (
    <div className="px-8 py-7 max-w-6xl mx-auto overflow-hidden">
      <div
        className="rounded-xl shadow-md p-7 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/images/bg-cnn.jpg")',
        }}
      >
        {/* Konten dengan semi-transparan background (opsional) */}
        <div className="bg-opacity-70 p-6 rounded-xl backdrop-blur-sm">
          <h1 className="text-xl md:text-2xl font-bold text-pink-800 mb-2">
            Klasifikasi Citra Pigmen Kanker Kulit Menggunakan Convolutional Neural Network
          </h1>
          <p className="text-pink-700 text-sm md:text-base">
            Situs ini menyediakan layanan deteksi kanker kulit secara otomatis menggunakan teknologi
            Convolutional Neural Network (CNN) berbasis citra medis.
          </p>
        </div>
      </div>

      {/* Teks pengantar tambahan */}
      <div className="mt-6 p-6 rounded-xl text-pink-800 leading-relaxed">
        <p className="mb-4">
          Kanker kulit merupakan salah satu jenis kanker yang muncul akibat pertumbuhan sel kulit yang tidak normal.
          Penyakit ini dapat berbahaya apabila tidak terdeteksi sejak dini. Seiring berkembangnya teknologi,
          metode berbasis kecerdasan buatan seperti Convolutional Neural Network (CNN) mulai digunakan untuk
          membantu proses diagnosis melalui gambar medis.
        </p>
        <p className="mb-4">
          CNN merupakan metode dalam deep learning yang mampu mengenali pola visual dalam gambar dengan sangat baik.
          Dalam penelitian ini, CNN digunakan untuk mengklasifikasikan citra pigmen kulit ke dalam dua kategori utama:
          benign (jinak) dan non-melanocytic malignant (ganas), berdasarkan gambar dermoskopik dari dataset ISIC 2018.
        </p>
        <p className="mb-4">
          Website ini dikembangkan sebagai alat bantu untuk proses deteksi awal kanker kulit secara otomatis.
          Dengan mengunggah gambar lesi kulit, sistem akan memproses dan mengklasifikasikan gambar tersebut,
          disertai tingkat keyakinan hasilnya. Meski demikian, hasil dari sistem ini bukanlah diagnosis resmi,
          dan pengguna tetap disarankan untuk berkonsultasi dengan tenaga medis profesional.
        </p>
      </div>
    </div>
  )
}

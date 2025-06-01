'use client'

export default function HomePage() {
  return (
    <div className="px-8 py-7 max-w-6xl mx-auto overflow-hidden relative">

      <div
        className="rounded-xl shadow-md p-7 bg-cover bg-center relative z-10"
        style={{
          backgroundImage: 'url("/images/bg-cnn.jpg")',
        }}
      >
        {/* Overlay semi-transparan */}
        <div className="bg-white bg-opacity-70 p-6 rounded-xl backdrop-blur-sm">
          <h1 className="text-xl md:text-2xl font-bold text-pink-800 mb-2">
            Deteksi Kanker Kulit Menggunakan Convolutional Neural Network (CNN)
          </h1>
          <p className="text-pink-700 text-sm md:text-base">
            Website ini dirancang untuk mendeteksi kanker kulit secara otomatis melalui citra medis
            menggunakan teknologi terkini berbasis Convolutional Neural Network (CNN).
          </p>
        </div>
      </div>

      <div className="mt-6 p-6 rounded-xl text-pink-800 leading-relaxed relative z-10 bg-white/80 backdrop-blur-md shadow-inner">
        <p className="mb-4">
          <strong>Kanker kulit</strong> adalah salah satu jenis kanker yang timbul akibat pertumbuhan sel kulit yang tidak normal.
          Jika tidak segera dikenali dan ditangani, kanker kulit dapat berkembang menjadi kondisi yang berbahaya.
        </p>
        <p className="mb-4">
          Seiring dengan kemajuan teknologi, pendekatan berbasis <strong>Kecerdasan Buatan (AI)</strong> seperti <strong>Convolutional Neural Network (CNN)</strong>
          telah mulai dimanfaatkan untuk membantu proses diagnosis dari gambar medis secara lebih cepat dan akurat.
        </p>
        <p className="mb-4">
          CNN adalah metode dalam <em>deep learning</em> yang sangat efektif dalam mengenali pola visual dari citra.
          Dalam penelitian ini, CNN digunakan untuk mengklasifikasikan gambar pigmen kulit menjadi dua kategori utama:
          <strong> benign (jinak)</strong> dan <strong>malignant non-melanocytic (ganas)</strong>, dengan menggunakan data dari <em>ISIC 2018 Dataset</em>.
        </p>
        <p className="mb-4">
          Website ini dikembangkan sebagai alat bantu awal untuk mendeteksi kemungkinan kanker kulit secara otomatis.
          Pengguna hanya perlu mengunggah gambar lesi kulit, lalu sistem akan memproses dan memberikan hasil klasifikasi
          beserta tingkat kepercayaannya.
        </p>
        <p>
          Harap diperhatikan bahwa hasil klasifikasi dari sistem ini <strong>bukan merupakan diagnosis resmi</strong>.
          Untuk penanganan lebih lanjut dan diagnosis yang akurat, konsultasikan hasilnya kepada tenaga medis profesional.
        </p>
      </div>
    </div>
  )
}

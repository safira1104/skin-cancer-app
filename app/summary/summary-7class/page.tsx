export default function Summary7Class() {
  return (
    <div className="flex justify-center items-center min-h-screen"> {/* bg putih DIHAPUS */}
      <div className="p-10 rounded-xl shadow-lg max-w-full w-full flex justify bg-white"> {/* bg putih HANYA di tabel */}
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border border-pink-500 px-6 py-3 text-pink-700 font-semibold text-lg">Skin Lesion</th>
              <th className="border border-pink-500 px-6 py-3 text-pink-700 font-semibold text-lg">Total Images</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Benign keratosis like lesions</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">1089</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Basal cell carcinoma</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">514</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Actinic keratoses</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">327</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Vascular lesions</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">142</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Dermatofibroma</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">115</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Melanoma</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">1113</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Melanocytic nevus</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">6705</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700 font-bold">Total</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700 font-bold">10015</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

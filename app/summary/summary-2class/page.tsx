export default function Summary2Class() {
  return (
    <div className="flex justify-center items-center min-h-screen"> {/* bg putih DIHAPUS */}
      <div className="p-10 rounded-xl shadow-lg max-w-full w-full flex justify bg-white"> {/* bg putih HANYA di tabel */}
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border border-pink-500 px-4 py-2 text-pink-700 font-medium">Skin Lesion</th>
              <th className="border border-pink-500 px-4 py-2 text-pink-700 font-medium">Total Images</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Malignant</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">2440</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Benign</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">3972</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700 font-semibold">Total</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700 font-semibold">6412</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

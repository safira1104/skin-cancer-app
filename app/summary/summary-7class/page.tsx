export default function Summary7Class() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-200">
      <div className="bg-pink-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border border-pink-500 px-4 py-2 text-pink-700 font-medium">Skin Lesion</th>
              <th className="border border-pink-500 px-4 py-2 text-pink-700 font-medium">Total Images</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Benign keratosis like lesions</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">1089</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Basal cell carcinoma</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">514</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Actinic keratoses</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">327</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Vascular lesions</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">142</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Dermatofibroma</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">115</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Melanoma</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">1113</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">Melanocytic nevus</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700">6705</td>
            </tr>
            <tr>
              <td className="border border-pink-500 px-4 py-2 text-pink-700 font-semibold">Total</td>
              <td className="border border-pink-500 px-4 py-2 text-pink-700 font-semibold">10015</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Summary5Class() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-10 rounded-xl shadow-lg max-w-full w-full flex justify bg-white">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border border-pink-500 px-6 py-3 text-pink-700 font-medium">Skin Lesion</th>
              <th className="border border-pink-500 px-6 py-3 text-pink-700 font-medium">Total Images</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">Benign keratosis like lesions</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700">1099</td>
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
              <td className="border border-pink-500 px-6 py-3 text-pink-700 font-semibold">Total</td>
              <td className="border border-pink-500 px-6 py-3 text-pink-700 font-semibold">2197</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

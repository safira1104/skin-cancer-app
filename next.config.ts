import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 🔁 Rewrites: proxy permintaan ke /predict agar diarahkan ke Flask (localhost:5000)
  async rewrites() {
    return [
      {
        source: '/predict',
        destination: 'http://localhost:5000/predict',
      },
    ];
  },
};

export default nextConfig;

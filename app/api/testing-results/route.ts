// app/api/testing-results/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const flaskURL = 'http://localhost:5000/api/testing-results'; // ganti sesuai alamat Flask-mu

  try {
    const res = await fetch(flaskURL);
    const data = await res.json();

    // Hanya ambil maksimal 100 data
    const limitedData = data.slice(0, 100);

    return NextResponse.json(limitedData);
  } catch {
    // Tidak perlu deklarasi `error` karena tidak digunakan
    return NextResponse.json(
      { error: 'Gagal mengambil data dari Flask' },
      { status: 500 }
    );
  }
}

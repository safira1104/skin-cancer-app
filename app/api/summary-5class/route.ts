import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://localhost:5000/api/summary-5class');
    if (!response.ok) {
      return NextResponse.json({ error: 'Flask API error' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Gagal mengambil data dari Flask API' }, { status: 500 });
  }
}

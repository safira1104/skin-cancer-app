import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { split_name: string } }
) {
  const { split_name } = params;

  if (!['train', 'val', 'test'].includes(split_name)) {
    return NextResponse.json({ error: 'Invalid split name' }, { status: 404 });
  }

  try {
    const res = await fetch(`http://localhost:5000/api/split/${split_name}`);

    if (!res.ok) {
      return NextResponse.json({ error: 'Flask API error' }, { status: res.status });
    }

    // Ambil sebagai teks mentah dan ganti NaN
    const rawText = await res.text();
    const safeText = rawText.replace(/\bNaN\b/g, 'null');

    const data = JSON.parse(safeText); // parse setelah NaN diganti

    console.log('Flask response (safe):', data);

    const malignantCount = typeof data.malignant?.count === 'number' ? data.malignant.count : 0;
    const benignCount = typeof data.benign?.count === 'number' ? data.benign.count : 0;

    const count = malignantCount + benignCount;

    return NextResponse.json({
      count,
      data: {
        malignant: data.malignant,
        benign: data.benign,
      },
    });

  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Flask API' }, { status: 500 });
  }
}

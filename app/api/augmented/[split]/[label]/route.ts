import { NextResponse } from 'next/server';

const validSplits = ['train', 'val', 'test'];
const validLabels = ['malignant', 'benign'];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const segments = url.pathname.split('/'); // ['', 'api', 'augmented', 'val', 'malignant']

  if (segments.length < 5) {
    return NextResponse.json({ error: 'Invalid request format' }, { status: 400 });
  }

  const split = segments[3];
  const label = segments[4];

  if (!validSplits.includes(split) || !validLabels.includes(label)) {
    return NextResponse.json({ error: 'Invalid split or label' }, { status: 400 });
  }

  try {
    const res = await fetch(`http://localhost:5000/list_images/augmented_result/${split}/${label}`);
    if (!res.ok) {
      return NextResponse.json({ error: 'Flask API error' }, { status: res.status });
    }

    const urls = await res.json(); // ex: ["/augmented_dataset/val/malignant/ISIC_0024771.jpg"]
    return NextResponse.json(urls);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch from Flask' }, { status: 500 });
  }
}

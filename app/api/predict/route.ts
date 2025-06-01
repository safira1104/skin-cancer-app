import { NextRequest, NextResponse } from 'next/server';
import FormData from 'form-data';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  // Convert Next.js File ke readable stream dan kirim ke Flask
  const buffer = Buffer.from(await file.arrayBuffer());

  const forwardForm = new FormData();
  forwardForm.append('file', buffer, file.name);

  try {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      body: forwardForm as any,
      headers: forwardForm.getHeaders?.(),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error || 'Prediction failed' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Server error: ' + error }, { status: 500 });
  }
}

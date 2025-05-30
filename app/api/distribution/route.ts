// app/api/distribution/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('http://localhost:5000/api/distribution')

    if (!res.ok) {
      throw new Error('Failed to fetch data from Flask API')
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}

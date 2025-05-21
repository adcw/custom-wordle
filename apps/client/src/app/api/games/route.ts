import { NextResponse } from 'next/server';
import clientPromise from '../mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('custom_wordle');
    const games = await db.collection('games').find({}).toArray();

    console.log(games);
    return NextResponse.json(games);
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
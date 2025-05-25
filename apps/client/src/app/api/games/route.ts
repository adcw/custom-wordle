import { NextResponse } from 'next/server';
import { getClientPromise } from '@custom-wordle/data-access';


export async function GET() {
  try {
    const client = await getClientPromise();
    const db = client.db('custom_wordle');
    const games = await db.collection('games').find({}).toArray();

    console.log(games);
    // console.log(somelib());
    return NextResponse.json(games);
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

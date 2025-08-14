import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// app/api/affirmation/route.js
export async function GET() {
  return new Response(JSON.stringify({ test: 'ok' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}


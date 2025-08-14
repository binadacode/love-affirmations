import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "affirmations.json");
    const data = fs.readFileSync(filePath, "utf8");
    const affirmations = JSON.parse(data);

    // Pick a random affirmation
    const random = affirmations[Math.floor(Math.random() * affirmations.length)];

    return NextResponse.json(
      { affirmation: random },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store", // ❌ important for fresh random data
        },
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to load affirmations" }, { status: 500 });
  }
}

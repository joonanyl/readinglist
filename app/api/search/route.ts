import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") || ""
  const encodedQ = encodeURI(q)

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodedQ}&langRestrict=en&key=${process.env.GOOGLE_BOOKS_API_KEY}`
  )

  const books = await res.json()
  return NextResponse.json({ books })
}

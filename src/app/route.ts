import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  console.log(request.nextUrl)

  return new NextResponse("hi")
}

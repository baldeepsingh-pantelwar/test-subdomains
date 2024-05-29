import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  console.log("route.ts", request.nextUrl)

  return new NextResponse("hi")
}

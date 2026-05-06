import { NextRequest, NextResponse } from "next/server";

interface ApiResponse {
  message: string;
  timestamp: string;
}

export async function GET(
  request: NextRequest,
): Promise<NextResponse<ApiResponse>> {
  return NextResponse.json(
    {
      message: "Hello from API",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  );
}

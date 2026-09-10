import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    console.info("[API Newsletter Subscriber]", { email });

    return NextResponse.json({
      success: true,
      message: "Registered for private collection archive.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server processing error" },
      { status: 500 }
    );
  }
}

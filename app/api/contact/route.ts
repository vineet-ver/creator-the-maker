import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required form fields." },
        { status: 400 }
      );
    }

    console.info("[API Contact Message Received]", {
      client: body.name,
      email: body.email,
      subject: body.subject,
    });

    return NextResponse.json({
      success: true,
      message: "Concierge message received.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server processing error" },
      { status: 500 }
    );
  }
}

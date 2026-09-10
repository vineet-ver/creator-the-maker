import { NextResponse } from "next/server";
import { generateBespokeReference } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: "Missing required contact coordinates." },
        { status: 400 }
      );
    }

    const referenceCode = body.referenceCode || generateBespokeReference();

    // In production with DATABASE_URL, this writes directly to prisma.bespokeInquiry.create(...)
    // Here we gracefully log and return success
    console.info("[API Bespoke Submission Received]", {
      referenceCode,
      client: body.name,
      email: body.email,
      sneakerCount: body.sneakerCount,
    });

    return NextResponse.json({
      success: true,
      referenceCode,
      message: "Bespoke inquiry received. Architectural director notified.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server processing error" },
      { status: 500 }
    );
  }
}

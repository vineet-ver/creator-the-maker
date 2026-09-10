import { NextResponse } from "next/server";
import { generateOrderNumber } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, customer, paymentMethod } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Cart is empty." },
        { status: 400 }
      );
    }

    const orderNumber = generateOrderNumber();

    // If Stripe secret key exists in production environment, instantiate stripe session:
    if (process.env.STRIPE_SECRET_KEY) {
      // In real Stripe workflow: stripe.checkout.sessions.create(...)
    }

    return NextResponse.json({
      success: true,
      orderNumber,
      message: "Order authorized and queued for studio fabrication.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Payment processing exception" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import conf from "@/conf";

const { stripeSecretKey } = conf;

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10",
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  if (body.length) {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1PRtuvIcfOgsdcoZCYh99Oh5" },
          { shipping_rate: "shr_1PRtu9IcfOgsdcoZHiaTPHH5" },
        ],
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/?success=true`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      // NextResponse.redirect
      return NextResponse.json({ session });
    } catch (err: any) {
      console.log(err);
      return NextResponse.json(err.message);
    }
  } else {
    return NextResponse.json({ message: "No Data fOUND" });
  }
}

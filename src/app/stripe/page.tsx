"use client";
import { Button } from "@/components/ui/button";
import React from "react";
// import getStripePromise from "@/lib/stripe";

type Props = {};

const StripePage = (props: Props) => {
  // const onCheckout = async () => {
  //   const stripe = getStripePromise();
  //   const products = [
  //     {
  //       product: 1,
  //       name: "Stripe Product ",
  //       price: 400,
  //       quantity: 2,
  //     },
  //   ];
  //   const respone = await fetch("api/stripe-session/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     cache: "no-cache",
  //     body: JSON.stringify(products),
  //   });
  //   const data = await respone.json();
  //   if (data.session) {
  //     stripe.redirectToCheckout({ sessionId: data.session.id });
  //   }
  // };
  return (
    <div className="flex justify-center mx-auto items-center">
      <div className="flex flex-col">
        <div>Stripe Checkout </div>
        {/* <Button onClick={onCheckout}>Checkout</Button> */}
      </div>
    </div>
  );
};

export default StripePage;

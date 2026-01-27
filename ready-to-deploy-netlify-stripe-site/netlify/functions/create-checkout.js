import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
  const { name, amount } = JSON.parse(event.body);

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "gbp",
        product_data: { name },
        unit_amount: amount
      },
      quantity: 1
    }],
    success_url: process.env.URL + "/?success=true",
    cancel_url: process.env.URL + "/?cancelled=true"
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ url: session.url })
  };
};
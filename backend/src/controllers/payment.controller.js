import Stripe from "stripe";
import Donation from "../models/Donation.js";
import Project from "../models/Project.js";
import { usdToBdt } from "../utils/convert.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  const { amountUSD, projectId, name, email } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation",
          },
          unit_amount: amountUSD * 100,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
    metadata: {
      projectId,
      name,
      email,
      amountUSD,
    },
  });

  res.json({ url: session.url });
};

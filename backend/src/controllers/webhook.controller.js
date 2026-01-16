import Stripe from "stripe";
import Donation from "../models/Donation.js";
import Project from "../models/Project.js";
import { usdToBdt } from "../utils/convert.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const donation = await Donation.create({
      name: session.metadata.name,
      email: session.metadata.email,
      amountUSD: session.metadata.amountUSD,
      amountBDT: usdToBdt(session.metadata.amountUSD),
      project: session.metadata.projectId,
      paymentStatus: "paid",
      paymentId: session.payment_intent,
    });

    await Project.findByIdAndUpdate(session.metadata.projectId, {
      $inc: { collectedAmount: donation.amountBDT },
    });
  }

  res.json({ received: true });
};

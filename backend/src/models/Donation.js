import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    amountUSD: Number,
    amountBDT: Number,
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
    paymentId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);

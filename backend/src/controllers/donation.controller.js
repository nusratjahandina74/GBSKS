import Donation from "../models/Donation.js";
import Project from "../models/Project.js";
import { usdToBdt } from "../utils/convert.js";

// CREATE DONATION (after payment success)
export const createDonation = async (req, res) => {
  try {
    const { name, email, amountUSD, projectId, paymentId } = req.body;

    const donation = await Donation.create({
      name,
      email,
      amountUSD,
      amountBDT: usdToBdt(amountUSD),
      project: projectId,
      paymentStatus: "paid",
      paymentId,
    });

    // update project collected amount
    await Project.findByIdAndUpdate(projectId, {
      $inc: { collectedAmount: usdToBdt(amountUSD) },
    });

    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADMIN – all donations
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate("project", "title category")
      .sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

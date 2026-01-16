import express from "express";
import {
  createDonation,
  getAllDonations,
} from "../controllers/donation.controller.js";

const router = express.Router();

router.post("/", createDonation);
router.get("/", getAllDonations);

export default router;

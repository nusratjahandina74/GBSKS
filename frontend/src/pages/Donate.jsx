import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLocalDonation } from "../utils/donationsStore";

export default function Donate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amountUSD, setAmountUSD] = useState("");
  const navigate = useNavigate(); // 👈 যোগ হলো

  const USD_TO_BDT = 110; // demo rate (later API)

  const handleDonate = (e) => {
    e.preventDefault();

    const usd = Number(amountUSD || 0);
    const bdt = usd * USD_TO_BDT;

    addLocalDonation({
      id: crypto.randomUUID(),
      name,
      email,
      amountUSD: usd,
      amountBDT: bdt,
      method: "Card",
      status: "PAID",
      createdAt: new Date().toISOString(),
    });

    alert("Donation saved (demo). Thank you!");
    setName("");
    setEmail("");
    setAmountUSD("");

    navigate("/"); // 👈 Donate শেষ হলে Home এ যাবে
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleDonate}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-8 rounded-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Donate (Demo)
        </h2>

        <input
          className="w-full p-3 mb-4 rounded border bg-white dark:bg-transparent dark:text-white dark:border-gray-600"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 rounded border bg-white dark:bg-transparent dark:text-white dark:border-gray-600"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 rounded border bg-white dark:bg-transparent dark:text-white dark:border-gray-600"
          placeholder="Amount (USD)"
          value={amountUSD}
          onChange={(e) => setAmountUSD(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Donate
        </button>

        <p className="text-xs mt-3 text-gray-600 dark:text-gray-300">
          * Demo mode: saves into localStorage. Backend connect then real payment start.
        </p>
      </form>
    </div>
  );
}

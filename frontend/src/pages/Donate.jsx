import { useState } from "react";
import axios from "axios";

export default function Donate() {
  const [amount, setAmount] = useState(10);

  const donateNow = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/payment/checkout",
      {
        amountUSD: amount,
        projectId: "PROJECT_ID",
        name: "Donor",
        email: "donor@email.com",
      }
    );
    window.location.href = res.data.url;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Donate Now
        </h2>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />

        <button
          onClick={donateNow}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Donate ${amount}
        </button>
      </div>
    </div>
  );
}

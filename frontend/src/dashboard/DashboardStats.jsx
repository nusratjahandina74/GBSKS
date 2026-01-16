import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardStats() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/donations").then((res) => {
      const sum = res.data.reduce((acc, d) => acc + d.amountBDT, 0);
      setTotal(sum);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <p className="text-gray-500">Total Donation (BDT)</p>
        <h2 className="text-2xl font-bold text-green-600">
          ৳ {total}
        </h2>
      </div>
    </div>
  );
}

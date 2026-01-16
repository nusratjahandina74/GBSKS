import { useEffect, useState } from "react";
import axios from "axios";
import DonationChart from "./DonationChart";
import DonationTable from "./DonationTable";

export default function AdminDashboard() {
  const [donations, setDonations] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/donations") 
      .then((res) => setDonations(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      {/* Dashboard charts */}
      <DonationChart data={donations} />

      {/* Donations table */}
      <DonationTable donations={donations} />
    </div>
  );
}

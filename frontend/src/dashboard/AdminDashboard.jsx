import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { getLocalDonations } from "../utils/donationsStore";

import Sidebar from "../components/admin/Sidebar";
import DashboardCards from "../components/admin/DashboardCards";
import DonationTable from "../components/admin/DonationTable";
import DonationChart from "../components/admin/DonationChart";

export default function AdminDashboard() {
  const isAdmin = localStorage.getItem("admin") === "true";
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // 1) Try backend (future)
    api
      .get("/api/donations")
      .then((res) => setDonations(res.data || []))
      .catch(() => {
        // 2) fallback local (now)
        setDonations(getLocalDonations());
      });
  }, []);

  if (!isAdmin) return <Navigate to="/login" />;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>

        <DashboardCards donations={donations} />
        <DonationChart donations={donations} />
        {/* <DonationTable donations={donations} /> */}
      </main>
    </div>
  );
}

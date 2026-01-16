import Sidebar from "../../components/admin/Sidebar";
import DashboardCards from "../../components/admin/DashboardCards";
import DonationTable from "../../components/admin/DonationTable";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <DashboardCards />
        <DonationTable />
      </main>
    </div>
  );
}

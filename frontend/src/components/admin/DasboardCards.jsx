export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Total Donation</h3>
        <p className="text-2xl font-bold">€12,450</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-gray-500">This Month</h3>
        <p className="text-2xl font-bold">€2,300</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Today</h3>
        <p className="text-2xl font-bold">€320</p>
      </div>
    </div>
  );
}

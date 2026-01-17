import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const isAdmin = localStorage.getItem("admin");

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Total Donations
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
            $12,500
          </h2>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Total Donors
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
            320
          </h2>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Projects
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
            3
          </h2>
        </div>
      </div>
    </div>
  );
}

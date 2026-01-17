import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:block bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6">
      <div className="font-bold text-xl mb-8 text-gray-900 dark:text-white">
        Admin Panel
      </div>

      <nav className="space-y-3 text-gray-700 dark:text-gray-200">
        <Link className="block hover:opacity-80" to="/admin">Dashboard</Link>
        <Link className="block hover:opacity-80" to="/">Back to Site</Link>
      </nav>
    </aside>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">GBSKS Admin</h1>

      <ul className="space-y-4">
        <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-green-400 cursor-pointer">Donations</li>
        <li className="hover:text-green-400 cursor-pointer">Projects</li>
        <li className="hover:text-green-400 cursor-pointer">Logout</li>
      </ul>
    </aside>
  );
}

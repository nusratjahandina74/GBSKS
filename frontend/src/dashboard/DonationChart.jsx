import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DonationChart({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Donation Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amountBDT" fill="#34D399" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function DashboardCards({ donations = [] }) {
  const totalUSD = donations.reduce((sum, d) => sum + (Number(d.amountUSD) || 0), 0);
  const totalBDT = donations.reduce((sum, d) => sum + (Number(d.amountBDT) || 0), 0);
  const donors = new Set(donations.map((d) => d.email || d.name)).size;

  const Card = ({ title, value, sub }) => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
      <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{value}</h3>
      {sub ? <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">{sub}</p> : null}
    </div>
  );

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      <Card title="Total Donations (USD)" value={`$${totalUSD.toFixed(2)}`} />
      <Card title="Total Donations (BDT)" value={`${totalBDT.toFixed(0)} ৳`} sub="Converted amount (demo)" />
      <Card title="Unique Donors" value={donors} />
    </div>
  );
}

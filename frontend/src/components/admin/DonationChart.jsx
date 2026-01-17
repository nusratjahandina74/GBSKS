export default function DonationTable({ donations = [] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-5 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Donations</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Auto-updated (local for now)</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-900/40">
            <tr className="text-xs uppercase tracking-wide text-gray-600 dark:text-gray-300">
              <th className="p-4">Date</th>
              <th className="p-4">Donor</th>
              <th className="p-4">Email</th>
              <th className="p-4">USD</th>
              <th className="p-4">BDT</th>
              <th className="p-4">Method</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-800 dark:text-gray-100">
            {donations.length === 0 ? (
              <tr>
                <td className="p-4 text-gray-600 dark:text-gray-300" colSpan={7}>
                  No donations yet.
                </td>
              </tr>
            ) : (
              donations.map((d) => (
                <tr key={d.id} className="border-t border-gray-100 dark:border-gray-700">
                  <td className="p-4">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="p-4">{d.name || "Anonymous"}</td>
                  <td className="p-4">{d.email || "-"}</td>
                  <td className="p-4">${Number(d.amountUSD || 0).toFixed(2)}</td>
                  <td className="p-4">{Number(d.amountBDT || 0).toFixed(0)} ৳</td>
                  <td className="p-4">{d.method || "Card"}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-200">
                      {d.status || "PAID"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

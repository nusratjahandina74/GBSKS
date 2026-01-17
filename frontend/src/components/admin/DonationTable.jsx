export default function DonationTable() {
  return (
    <div className="bg-white dark:bg-gray-800 mt-8 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td>John Doe</td>
            <td>€100</td>
            <td>Bank</td>
            <td>12 Jan 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

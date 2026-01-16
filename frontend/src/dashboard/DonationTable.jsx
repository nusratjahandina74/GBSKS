export default function DonationTable({ donations }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Project</th>
            <th className="p-3">USD</th>
            <th className="p-3">BDT</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((d) => (
            <tr key={d._id} className="border-t">
              <td className="p-3">{d.name}</td>
              <td className="p-3">{d.project?.title}</td>
              <td className="p-3">${d.amountUSD}</td>
              <td className="p-3">৳{d.amountBDT}</td>
              <td className="p-3">{new Date(d.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

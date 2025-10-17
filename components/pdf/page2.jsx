const PDFPage2 = ({ data }) => {
  const { days } = data

  return (
    <div className="w-full min-h-screen bg-white p-8 page-break">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Activity Table</h2>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">City</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Activity</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Type</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Time Required</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-purple-100" : "bg-white"}>
              <td className="border border-gray-300 px-4 py-3 text-sm">{data.tripOverview.destination}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{day.title}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">Nature/Sightseeing</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">2-3 Hours</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Terms and <span className="text-purple-600">Conditions</span>
        </h3>
        <a href="#" className="text-blue-500 underline text-sm">
          View all terms and conditions
        </a>
      </div>

      <div className="border-t border-gray-300 pt-4 mt-12 text-xs text-gray-600 flex justify-between">
        <div>
          <p className="font-semibold">Vigovia Tech Pvt. Ltd</p>
          <p>Registered Office: HQ-109 Cinnabar Hills,</p>
          <p>Links Business Park, Karnataka, India</p>
        </div>
        <div className="text-right">
          <p>Phone: +91-9504061112</p>
          <p>Email ID: Ukarshi@vigovia.com</p>
          <p>CIN: U7311KA2020PTC191890</p>
        </div>
        <div>
          <div className="text-center">
            <h3 className="font-bold text-gray-900">vigovia</h3>
            <p className="text-xs">PLAN.PACK.GO</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export { PDFPage2 };
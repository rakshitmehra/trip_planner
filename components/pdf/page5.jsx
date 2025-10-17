const PDFPage5 = ({ data }) => {
  const { inclusions } = data

  return (
    <div className="w-full min-h-screen bg-white p-8 page-break">
      {/* Important Notes */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Important <span className="text-purple-600">Notes</span>
      </h2>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-1/4">Point</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-purple-100">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Airline Standard Policy</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">
              In Case Of Visa Rejection, Visa Fees Or Any Other Non-Cancellable Component Cannot Be Reimbursed At Any
              Cost
            </td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Flight/Hotel Cancellation</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">
              In Case Of Visa Rejection, Visa Fees Or Any Other Non-Cancellable Component Cannot Be Reimbursed At Any
              Cost
            </td>
          </tr>
          <tr className="bg-purple-100">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Trip Insurance</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">
              In Case Of Visa Rejection, Visa Fees Or Any Other Non-Cancellable Component Cannot Be Reimbursed At Any
              Cost
            </td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Hotel Check-In & Check Out</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">
              In Case Of Visa Rejection, Visa Fees Or Any Other Non-Cancellable Component Cannot Be Reimbursed At Any
              Cost
            </td>
          </tr>
          <tr className="bg-purple-100">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Visa Rejection</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">
              In Case Of Visa Rejection, Visa Fees Or Any Other Non-Cancellable Component Cannot Be Reimbursed At Any
              Cost
            </td>
          </tr>
        </tbody>
      </table>

      {/* Scope of Service */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Scope Of <span className="text-purple-600">Service</span>
      </h2>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold w-1/3">Service</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-purple-100">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">
              Flight Tickets And Hotel Vouchers
            </td>
            <td className="border border-gray-300 px-4 py-3 text-sm">Delivered 3 Days Post Full Payment</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Web Check-In</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">Boarding Pass Delivery Via Email/WhatsApp</td>
          </tr>
          <tr className="bg-purple-100">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Support</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">Chat Support - Response Time: 4 Hours</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Cancellation Support</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">Provided</td>
          </tr>
          <tr className="bg-purple-100">
            <td className="border border-gray-300 px-4 py-3 text-sm font-semibold">Trip Support</td>
            <td className="border border-gray-300 px-4 py-3 text-sm">Response Time: 5 Minutes</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Inclusion <span className="text-purple-600">Summary</span>
      </h2>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Count</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Details</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Status / Comments</th>
          </tr>
        </thead>
        <tbody>
          {inclusions.included.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-purple-100" : "bg-white"}>
              <td className="border border-gray-300 px-4 py-3 text-sm">{item.category}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{item.count}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{item.details}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">Awaiting Confirmation</td>
            </tr>
          ))}
        </tbody>
      </table>

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

export { PDFPage5 };
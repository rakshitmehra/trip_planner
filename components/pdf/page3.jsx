const PDFPage3 = ({ data }) => {
  const { payment, inclusions } = data

  return (
    <div className="w-full min-h-screen bg-white p-8 page-break">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Plan</h2>

      {/* Total Amount */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
          <p className="text-sm font-semibold text-gray-700">Total Amount</p>
          <p className="text-lg font-bold text-gray-900">
            {payment.currency} {payment.totalAmount} For 3 Pax (Inclusive Of GST)
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 border-2 border-purple-300 rounded-lg p-4 bg-purple-50">
          <p className="text-sm font-semibold text-gray-700">TCS</p>
          <p className="text-lg font-bold text-gray-900">{payment.tcs}</p>
        </div>
      </div>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Installment</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Amount</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {payment.installments.map((inst, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-purple-100" : "bg-white"}>
              <td className="border border-gray-300 px-4 py-3 text-sm">{inst.name}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">
                {payment.currency}
                {inst.amount}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{inst.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-bold text-gray-900 mb-4">Visa Details</h3>
      <div className="border-2 border-gray-300 rounded-lg p-4 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">Visa Type :</p>
            <p className="text-gray-900">{payment.visaType}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Validity:</p>
            <p className="text-gray-900">{payment.visaValidity}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Processing Date :</p>
            <p className="text-gray-900">{payment.processingDate}</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">PLAN.PACK.GO!</h3>
        <button className="px-12 py-3 bg-blue-900 text-white rounded-full font-bold hover:bg-blue-800">Book Now</button>
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

export { PDFPage3 };
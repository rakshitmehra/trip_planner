const PDFPage4 = ({ data }) => {
  const { days, flights, hotels } = data

  return (
    <div className="w-full min-h-screen bg-white p-8 page-break">
      {days[3] && (
        <div className="flex gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
              Day {days[3].dayNumber}
            </div>
          </div>
          <div className="flex-1">
            {days[3].image && (
              <img
                src={days[3].image || "/placeholder.svg"}
                alt={days[3].title}
                className="w-32 h-24 rounded-lg object-cover mb-2"
              />
            )}
            <p className="font-semibold text-gray-900">{days[3].date}</p>
            <p className="text-sm text-gray-700">{days[3].title}</p>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Flight Summary</h2>
      <div className="space-y-2 mb-8">
        {flights.map((flight, index) => (
          <div key={index} className="border-2 border-purple-300 rounded-lg p-3 bg-purple-50">
            <p className="text-sm font-semibold text-gray-900">{flight.date}</p>
            <p className="text-sm text-gray-700">
              {flight.airline} ({flight.flightNumber}) From {flight.from} To {flight.to} (SIN)
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Hotel Bookings</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">City</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Check In</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Check Out</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Nights</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hotel Name</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-purple-100" : "bg-white"}>
              <td className="border border-gray-300 px-4 py-3 text-sm">{hotel.city}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{hotel.checkIn}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{hotel.checkOut}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{hotel.nights}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm">{hotel.hotelName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-xs text-gray-600 space-y-1 mb-8">
        <p>1. All Hotels are Tentative And Can Be Reduced With Similar Properties</p>
        <p>2. Breakfast Included For All Hotel Days</p>
        <p>3. Visa Charges Are Included In The Package</p>
        <p>4. A Maximum Occupancy Of 2 Persons Per Room Is Allowed In Most Hotels</p>
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

export { PDFPage4 };
const PDFPage1 = ({ data }) => {
  const { tripOverview, days } = data

  return (
    <div className="w-full h-screen bg-white p-8 flex flex-col page-break">
      <div className="text-center mb-6">
        <div className="inline-block border-4 border-blue-900 px-6 py-2 mb-4">
          <h1 className="text-2xl font-bold text-yellow-500">vigovia</h1>
          <p className="text-xs text-gray-700">PLAN.PACK.GO</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-6">
        <h2 className="text-3xl font-bold mb-2">Hi, {tripOverview.userName}!</h2>
        <h3 className="text-2xl font-semibold mb-2">{tripOverview.tripTitle}</h3>
        <p className="text-lg mb-4">
          {tripOverview.duration} Days {Number.parseInt(tripOverview.duration) - 1} Nights
        </p>
        <div className="flex gap-2">
          <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">✈</span>
          <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">🏨</span>
          <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">🎫</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6 text-sm">
        <div className="border border-gray-300 p-3 rounded">
          <p className="font-semibold text-gray-700">Departure From :</p>
          <p className="text-gray-900">{tripOverview.departureCity}</p>
        </div>
        <div className="border border-gray-300 p-3 rounded">
          <p className="font-semibold text-gray-700">Departure :</p>
          <p className="text-gray-900">{tripOverview.departureDate}</p>
        </div>
        <div className="border border-gray-300 p-3 rounded">
          <p className="font-semibold text-gray-700">Arrival :</p>
          <p className="text-gray-900">{tripOverview.arrivalDate}</p>
        </div>
        <div className="border border-gray-300 p-3 rounded">
          <p className="font-semibold text-gray-700">Destination :</p>
          <p className="text-gray-900">{tripOverview.destination}</p>
        </div>
        <div className="border border-gray-300 p-3 rounded">
          <p className="font-semibold text-gray-700">No. Of Travellers :</p>
          <p className="text-gray-900">{tripOverview.numberOfTravelers}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {days.slice(0, 3).map((day, index) => (
          <div key={index} className="flex gap-4 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                Day {day.dayNumber}
              </div>
              {index < 2 && <div className="w-1 h-12 bg-blue-900 mt-2" />}
            </div>

            <div className="flex-1">
              {day.image && (
                <img
                  src={day.image || "/placeholder.svg"}
                  alt={day.title}
                  className="w-32 h-24 rounded-lg object-cover mb-2"
                />
              )}
              <p className="font-semibold text-gray-900">{day.date}</p>
              <p className="text-sm text-gray-700">{day.title}</p>

              <div className="mt-2 space-y-1 text-xs text-gray-600">
                {day.morning && (
                  <p>
                    <strong>Morning:</strong> {day.morning}
                  </p>
                )}
                {day.afternoon && (
                  <p>
                    <strong>Afternoon:</strong> {day.afternoon}
                  </p>
                )}
                {day.evening && (
                  <p>
                    <strong>Evening:</strong> {day.evening}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300 pt-4 mt-2 text-xs text-gray-600 flex justify-between">
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

export { PDFPage1 };
"use client";

import { useState, useEffect } from "react";

export interface Flight {
  date: string;
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
}

export interface Hotel {
  city: string;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  nights: string;
}

interface FlightHotelFormProps {
  data?: {
    flights?: Flight[];
    hotels?: Hotel[];
  };
  onUpdate: (data: { flights: Flight[]; hotels: Hotel[] }) => void;
}

const FlightHotelForm = ({ data, onUpdate }: FlightHotelFormProps) => {
  const [flights, setFlights] = useState(
    data?.flights || [
      {
        date: "",
        airline: "",
        flightNumber: "",
        from: "",
        to: "",
        departure: "",
        arrival: "",
      },
    ],
  )

  const [hotels, setHotels] = useState(
    data?.hotels || [
      {
        city: "",
        hotelName: "",
        checkIn: "",
        checkOut: "",
        nights: "",
      },
    ],
  )

  useEffect(() => {
    onUpdate({ flights, hotels })
  }, [flights, hotels])

  const handleAddFlight = () => {
    setFlights((prev) => [
      ...prev,
      {
        date: "",
        airline: "",
        flightNumber: "",
        from: "",
        to: "",
        departure: "",
        arrival: "",
      },
    ])
  }

  const handleRemoveFlight = (index: number) => {
    setFlights((prev) => prev.filter((_, i) => i !== index))
  }

  const handleFlightChange = (index: number, field: keyof Flight, value: string) => {
    setFlights((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const handleAddHotel = () => {
    setHotels((prev) => [
      ...prev,
      {
        city: "",
        hotelName: "",
        checkIn: "",
        checkOut: "",
        nights: "",
      },
    ])
  }

  const handleRemoveHotel = (index: number) => {
    setHotels((prev) => prev.filter((_, i) => i !== index))
  }

  const handleHotelChange = (index: number, field: keyof Hotel, value: string) => {
    setHotels((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  return (
    <div className="space-y-8">
      {/* Flights Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Flight Details</h3>
        <div className="space-y-4">
          {flights.map((flight, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900">Flight {index + 1}</h4>
                {flights.length > 1 && (
                  <button
                    onClick={() => handleRemoveFlight(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={flight?.date || ""}
                    onChange={(e) => handleFlightChange(index, "date", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Airline</label>
                  <input
                    type="text"
                    value={flight?.airline || ""}
                    onChange={(e) => handleFlightChange(index, "airline", e.target.value)}
                    placeholder="e.g., Air India"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Flight Number</label>
                  <input
                    type="text"
                    value={flight?.flightNumber || ""}
                    onChange={(e) => handleFlightChange(index, "flightNumber", e.target.value)}
                    placeholder="e.g., AX-123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">From</label>
                  <input
                    type="text"
                    value={flight?.from || ""}
                    onChange={(e) => handleFlightChange(index, "from", e.target.value)}
                    placeholder="e.g., Delhi (DEL)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">To</label>
                  <input
                    type="text"
                    value={flight.to}
                    onChange={(e) => handleFlightChange(index, "to", e.target.value)}
                    placeholder="e.g., Singapore (SIN)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Departure Time</label>
                  <input
                    type="time"
                    value={flight?.departure || ""}
                    onChange={(e) => handleFlightChange(index, "departure", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Arrival Time</label>
                  <input
                    type="time"
                    value={flight?.arrival || ""}
                    onChange={(e) => handleFlightChange(index, "arrival", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={handleAddFlight}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            + Add Flight
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Details</h3>
        <div className="space-y-4">
          {hotels.map((hotel, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-gray-900">Hotel {index + 1}</h4>
                {hotels.length > 1 && (
                  <button
                    onClick={() => handleRemoveHotel(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={hotel?.city || ""}
                    onChange={(e) => handleHotelChange(index, "city", e.target.value)}
                    placeholder="e.g., Singapore"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Hotel Name</label>
                  <input
                    type="text"
                    value={hotel?.hotelName || ""}
                    onChange={(e) => handleHotelChange(index, "hotelName", e.target.value)}
                    placeholder="e.g., Super Townhouse Oak"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-In Date</label>
                  <input
                    type="date"
                    value={hotel?.checkIn || ""}
                    onChange={(e) => handleHotelChange(index, "checkIn", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Check-Out Date</label>
                  <input
                    type="date"
                    value={hotel?.checkOut || ""}
                    onChange={(e) => handleHotelChange(index, "checkOut", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Nights</label>
                  <input
                    type="number"
                    value={hotel?.nights || ""}
                    onChange={(e) => handleHotelChange(index, "nights", e.target.value)}
                    placeholder="e.g., 2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={handleAddHotel}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            + Add Hotel
          </button>
        </div>
      </div>
    </div>
  )
}

export { FlightHotelForm };
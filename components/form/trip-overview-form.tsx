"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react"

export interface TripOverviewData {
  userName: string
  destination: string
  departureDate: string
  arrivalDate: string
  departureCity: string
  numberOfTravelers: string
  duration: string
  tripTitle: string
}

interface TripOverviewFormProps {
  data: Record<string, string | number>
  onUpdate: (data: TripOverviewData) => void
}

const TripOverviewForm = ({ data, onUpdate }: TripOverviewFormProps) => {
  const [formData, setFormData] = useState<TripOverviewData>(
    (data as unknown as TripOverviewData) || {
      userName: "",
      destination: "",
      departureDate: "",
      arrivalDate: "",
      departureCity: "",
      numberOfTravelers: "",
      duration: "",
      tripTitle: "",
    },
  )

  useEffect(() => {
    onUpdate(formData)
  }, [formData])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="e.g., Rahul"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Trip Title</label>
          <input
            type="text"
            name="tripTitle"
            value={formData.tripTitle}
            onChange={handleChange}
            placeholder="e.g., Singapore Itinerary"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g., Singapore"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Departure City</label>
          <input
            type="text"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            placeholder="e.g., Mumbai"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Departure Date</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Arrival Date</label>
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (Days)</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Travelers</label>
          <input
            type="number"
            name="numberOfTravelers"
            value={formData.numberOfTravelers}
            onChange={handleChange}
            placeholder="e.g., 4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  )
}

export { TripOverviewForm }
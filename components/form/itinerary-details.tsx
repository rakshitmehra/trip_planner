"use client";

import { useState, useEffect, useCallback } from "react";

export interface DayData {
  dayNumber: number
  date: string
  title: string
  image: string
  morning: string
  afternoon: string
  evening: string
}

interface ItineraryDaysFormProps {
  data: DayData[]
  onUpdate: (data: DayData[]) => void
}

const ItineraryDaysForm = ({ data, onUpdate }: ItineraryDaysFormProps) => {
  const [days, setDays] = useState<DayData[]>(
    data && data.length > 0
      ? data
      : [
          {
            dayNumber: 1,
            date: "",
            title: "",
            image: "",
            morning: "",
            afternoon: "",
            evening: "",
          },
        ],
  )

  useEffect(() => {
    onUpdate(days)
  }, [days])

  const handleAddDay = useCallback(() => {
    setDays((prev) => [
      ...prev,
      {
        dayNumber: prev.length + 1,
        date: "",
        title: "",
        image: "",
        morning: "",
        afternoon: "",
        evening: "",
      },
    ])
  }, [])

  const handleRemoveDay = useCallback((index: number) => {
    setDays((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const handleDayChange = useCallback((index: number, field: string, value: string) => {
    setDays((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }, [])

  return (
    <div className="space-y-6">
      {days.map((day, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Day {day.dayNumber}</h3>
            {days.length > 1 && (
              <button
                onClick={() => handleRemoveDay(index)}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={day.date}
                onChange={(e) => handleDayChange(index, "date", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Day Title</label>
              <input
                type="text"
                value={day.title}
                onChange={(e) => handleDayChange(index, "title", e.target.value)}
                placeholder="e.g., Arrival in Singapore & City Exploration"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
            <input
              type="text"
              value={day.image}
              onChange={(e) => handleDayChange(index, "image", e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Morning Activities</label>
              <textarea
                value={day.morning}
                onChange={(e) => handleDayChange(index, "morning", e.target.value)}
                placeholder="Arrive in Singapore, Transfer from Airport to Hotel"
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Afternoon Activities</label>
              <textarea
                value={day.afternoon}
                onChange={(e) => handleDayChange(index, "afternoon", e.target.value)}
                placeholder="Check into Your Hotel, Visit Marina Bay Sands Sky Park"
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Evening Activities</label>
              <textarea
                value={day.evening}
                onChange={(e) => handleDayChange(index, "evening", e.target.value)}
                placeholder="Explore Gardens By The Bay, including Super Tree Grove"
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddDay}
        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        + Add Another Day
      </button>
    </div>
  )
}

export { ItineraryDaysForm };
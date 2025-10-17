"use client";

import { useState, useCallback } from "react";
import { TripOverviewForm, type TripOverviewData } from "./form/trip-overview-form";
import { ItineraryDaysForm, type DayData } from "./form/itinerary-details";
import { FlightHotelForm, type Flight, type Hotel } from "./form/flight-hotel-form";
import { PaymentInclusionsForm } from "./form/payment-inclusion-form";

export interface FormData {
  tripOverview: Partial<TripOverviewData>
  days: DayData[]
  flights: Flight[]
  hotels: Hotel[]
  payment: Record<string, string | number>
  inclusions: { included: string[]; excluded: string[] }
}

export interface ItineraryFormProps {
  onSubmit: (data: FormData) => void
}

const ItineraryForm = ({ onSubmit }: ItineraryFormProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    tripOverview: {},
    days: [],
    flights: [],
    hotels: [],
    payment: {},
    inclusions: { included: [], excluded: [] },
  })

  const handleStepData = useCallback((stepData: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...stepData,
    }))
  }, [])

  const handleNext = useCallback(() => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }, [currentStep])

  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  const handleSubmit = useCallback(() => {
    onSubmit(formData)
  }, [formData, onSubmit])

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Vigovia</h1>
              <p className="text-gray-600">PLAN.PACK.GO</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8 space-x-4 ">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all ${
                      step < currentStep ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {currentStep === 1 && "Trip Overview"}
              {currentStep === 2 && "Itinerary & Activities"}
              {currentStep === 3 && "Flights & Hotels"}
              {currentStep === 4 && "Payment & Inclusions"}
            </h2>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {currentStep === 1 && (
            <TripOverviewForm
              data={formData.tripOverview}
              onUpdate={(data) => handleStepData({ tripOverview: data })}
            />
          )}
          {currentStep === 2 && (
            <ItineraryDaysForm data={formData.days} onUpdate={(data) => handleStepData({ days: data })} />
          )}
          {currentStep === 3 && (
            <FlightHotelForm
              data={{ flights: formData.flights, hotels: formData.hotels }}
              onUpdate={(data) => handleStepData(data)}
            />
          )}
          {currentStep === 4 && (
            <PaymentInclusionsForm
              data={{ payment: formData.payment, inclusions: formData.inclusions }}
              onUpdate={(data) => handleStepData(data)}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
          >
            Previous
          </button>

          <div className="text-sm text-gray-600">Step {currentStep} of 4</div>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Generate PDF
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export { ItineraryForm }
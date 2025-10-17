"use client";

import { useState } from "react";
import { ItineraryForm, type FormData } from "../../components/itinerary";
import { PDFPreview } from "../../components/pdf-preview";

export default function Home() {
  const [formData, setFormData] = useState<FormData | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const handleFormSubmit = (data: FormData) => {
    setFormData(data)
    setShowPreview(true)
  }

  const handleBack = () => {
    setShowPreview(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {!showPreview ? (
        <ItineraryForm onSubmit={handleFormSubmit} />
      ) : (
        <PDFPreview data={formData} onBack={handleBack} />
      )}
    </main>
  )
}

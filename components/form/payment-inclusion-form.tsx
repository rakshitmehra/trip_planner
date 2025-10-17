"use client";

import { useState, useEffect } from "react";

const PaymentInclusionsForm = ({ data, onUpdate }: { data: any; onUpdate: (data: any) => void }) => {
  const [payment, setPayment] = useState(
    data?.payment && Object.keys(data.payment).length > 0
      ? {
          totalAmount: data.payment.totalAmount || "",
          currency: data.payment.currency || "₹",
          tcs: data.payment.tcs || "Not Collected",
          installments: data.payment.installments || [
            { name: "Installment 1", amount: "", dueDate: "" },
            { name: "Installment 2", amount: "", dueDate: "" },
            { name: "Installment 3", amount: "", dueDate: "" },
          ],
          visaType: data.payment.visaType || "",
          visaValidity: data.payment.visaValidity || "",
          processingDate: data.payment.processingDate || "",
        }
      : {
          totalAmount: "",
          currency: "₹",
          tcs: "Not Collected",
          installments: [
            { name: "Installment 1", amount: "", dueDate: "" },
            { name: "Installment 2", amount: "", dueDate: "" },
            { name: "Installment 3", amount: "", dueDate: "" },
          ],
          visaType: "",
          visaValidity: "",
          processingDate: "",
        },
  )

  const [inclusions, setInclusions] = useState(
    data?.inclusions && Object.keys(data.inclusions).length > 0
      ? {
          included: data.inclusions.included || [
            { category: "Flight", count: "", details: "" },
            { category: "Hotel", count: "", details: "" },
            { category: "Taxi", count: "", details: "" },
          ],
          excluded: data.inclusions.excluded || [{ point: "", details: "" }],
        }
      : {
          included: [
            { category: "Flight", count: "", details: "" },
            { category: "Hotel", count: "", details: "" },
            { category: "Taxi", count: "", details: "" },
          ],
          excluded: [{ point: "", details: "" }],
        },
  )

  useEffect(() => {
    onUpdate({ payment, inclusions })
  }, [payment, inclusions])

  interface PaymentField {
    field: keyof Payment;
    value: string;
  }

  const handlePaymentChange = (field: keyof Payment, value: string) => {
    setPayment((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  interface Installment {
    name: string;
    amount: string;
    dueDate: string;
  }

  interface Payment {
    totalAmount: string;
    currency: string;
    tcs: string;
    installments: Installment[];
    visaType: string;
    visaValidity: string;
    processingDate: string;
  }

  const handleInstallmentChange = (index: number, field: keyof Installment, value: string) => {
    setPayment((prev) => {
      const updated = { ...prev }
      updated.installments[index] = {
        ...updated.installments[index],
        [field]: value,
      }
      return updated
    })
  }

  interface IncludedItem {
    category: string;
    count: string;
    details: string;
  }

  const handleInclusionChange = (index: number, field: keyof IncludedItem, value: string) => {
    setInclusions((prev) => {
      const updated = { ...prev }
      updated.included[index] = {
        ...updated.included[index],
        [field]: value,
      }
      return updated
    })
  }

  interface ExcludedItem {
    point: string;
    details: string;
  }

  const handleExclusionChange = (index: number, field: keyof ExcludedItem, value: string) => {
    setInclusions((prev) => {
      const updated = { ...prev }
      updated.excluded[index] = {
        ...updated.excluded[index],
        [field]: value,
      }
      return updated
    })
  }

  const handleAddInclusion = () => {
    setInclusions((prev) => ({
      ...prev,
      included: [...prev.included, { category: "", count: "", details: "" }],
    }))
  }

  const handleAddExclusion = () => {
    setInclusions((prev) => ({
      ...prev,
      excluded: [...prev.excluded, { point: "", details: "" }],
    }))
  }

  return (
    <div className="space-y-8">
      {/* Payment Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Plan</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Total Amount</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={payment.currency}
                onChange={(e) => handlePaymentChange("currency", e.target.value)}
                className="w-16 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="number"
                value={payment.totalAmount}
                onChange={(e) => handlePaymentChange("totalAmount", e.target.value)}
                placeholder="e.g., 90000"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">TCS Status</label>
            <select
              value={payment.tcs}
              onChange={(e) => handlePaymentChange("tcs", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Not Collected</option>
              <option>Collected</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Installments</h4>
          <div className="space-y-3">
            {payment.installments &&
              Array.isArray(payment.installments) &&
              payment.installments.map((inst, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">{inst.name}</label>
                    <input
                      type="number"
                      value={inst.amount}
                      onChange={(e) => handleInstallmentChange(index, "amount", e.target.value)}
                      placeholder="Amount"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Due Date</label>
                    <input
                      type="text"
                      value={inst.dueDate}
                      onChange={(e) => handleInstallmentChange(index, "dueDate", e.target.value)}
                      placeholder="e.g., Initial Payment"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Visa Type</label>
            <input
              type="text"
              value={payment.visaType}
              onChange={(e) => handlePaymentChange("visaType", e.target.value)}
              placeholder="e.g., 123456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Visa Validity</label>
            <input
              type="text"
              value={payment.visaValidity}
              onChange={(e) => handlePaymentChange("visaValidity", e.target.value)}
              placeholder="e.g., 123456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Processing Date</label>
            <input
              type="text"
              value={payment.processingDate}
              onChange={(e) => handlePaymentChange("processingDate", e.target.value)}
              placeholder="e.g., 123456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Inclusions Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusions</h3>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Included Items</h4>
          <div className="space-y-3">
            {inclusions.included &&
              Array.isArray(inclusions.included) &&
              inclusions.included.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                    <input
                      type="text"
                      value={item.category}
                      onChange={(e) => handleInclusionChange(index, "category", e.target.value)}
                      placeholder="e.g., Flight"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Count</label>
                    <input
                      type="text"
                      value={item.count}
                      onChange={(e) => handleInclusionChange(index, "count", e.target.value)}
                      placeholder="e.g., 2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Details</label>
                    <input
                      type="text"
                      value={item.details}
                      onChange={(e) => handleInclusionChange(index, "details", e.target.value)}
                      placeholder="e.g., All Flights Mentioned"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={handleAddInclusion}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            + Add Inclusion
          </button>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Excluded Items</h4>
          <div className="space-y-3">
            {inclusions.excluded &&
              Array.isArray(inclusions.excluded) &&
              inclusions.excluded.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Point</label>
                    <input
                      type="text"
                      value={item.point}
                      onChange={(e) => handleExclusionChange(index, "point", e.target.value)}
                      placeholder="e.g., Airline Standard Policy"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Details</label>
                    <input
                      type="text"
                      value={item.details}
                      onChange={(e) => handleExclusionChange(index, "details", e.target.value)}
                      placeholder="Details"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={handleAddExclusion}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            + Add Exclusion
          </button>
        </div>
      </div>
    </div>
  )
}

export { PaymentInclusionsForm };
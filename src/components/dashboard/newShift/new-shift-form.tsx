"use client"

import { useState } from "react"

export default function NewShiftForm() {
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  const days = [
    { label: "S", value: "sunday" },
    { label: "M", value: "monday" },
    { label: "T", value: "tuesday" },
    { label: "W", value: "wednesday" },
    { label: "T", value: "thursday" },
    { label: "F", value: "friday" },
    { label: "S", value: "saturday" },
  ]

  const colors = ["bg-purple-300", "bg-pink-300", "bg-blue-300", "bg-rose-300", "bg-amber-300"]

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="space-y-6">
        <div>
          <label htmlFor="shift-name" className="block text-sm font-medium text-gray-700">
            Write the Shift name here
          </label>
          <input
            type="text"
            id="shift-name"
            placeholder="--"
            className="mt-2 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700">Set the shift time</h3>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
                Starting time
              </label>
              <input
                type="text"
                id="start-time"
                placeholder="--"
                className="mt-2 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">
                Ending time
              </label>
              <input
                type="text"
                id="end-time"
                placeholder="--"
                className="mt-2 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ride Days:</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {days.map((day, index) => (
              <button
                key={index}
                type="button"
                onClick={() => toggleDay(day.value)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                  selectedDays.includes(day.value)
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Select the shift color</label>
          <div className="mt-2 flex flex-wrap gap-4">
            {colors.map((color, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`h-16 w-16 rounded-full ${color} ${
                  selectedColor === color ? "ring-2 ring-blue-500 ring-offset-2" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 py-3 text-center font-medium text-white hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  )
}

import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function DriverProfile() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
        {/* Driver Photo */}
        <div className="mx-auto w-full max-w-[300px]">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/driver.png"
              alt="Driver Photo"
              width={300}
              height={300}
              className="aspect-square object-cover"
            />
          </div>
        </div>

        {/* Driver Details */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">Name</h3>
            <p className="mt-1 text-lg">Zara Thompson</p>
            <div className="mt-2 h-px w-full bg-gray-200"></div>
          </div>

          {/* Gender */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">Gender</h3>
            <p className="mt-1 text-lg">Male</p>
            <div className="mt-2 h-px w-full bg-gray-200"></div>
          </div>

          {/* Number */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">Number</h3>
            <div className="mt-1 flex items-center justify-between">
              <p className="text-lg">+33 7 23 45 67 89</p>
              <button className="rounded-full p-1 text-green-500 hover:bg-green-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </button>
            </div>
            <div className="mt-2 h-px w-full bg-gray-200"></div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-medium text-gray-500">Address</h3>
            <p className="mt-1 text-lg">45 Rue de la Liberté, 75012 Paris, France</p>
            <div className="mt-2 h-px w-full bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Driving License */}
      <div className="mt-6">
        <h3 className="mb-4 text-sm font-medium text-gray-700">Driving License</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            <Image
              src="/license.png"
              alt="Driver License Front"
              width={300}
              height={150}
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
            <Image
              src="/license.png"
              alt="Driver License Back"
              width={300}
              height={150}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Assigned Shift */}
      <div className="mt-6">
        <h3 className="mb-2 text-sm font-medium text-gray-700">Assigned shift</h3>
        <button className="flex w-full items-center justify-between rounded-lg bg-blue-500 px-4 py-2 text-white">
          <span>Shift A</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

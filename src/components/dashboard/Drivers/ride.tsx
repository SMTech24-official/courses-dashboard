import { CalendarClockIcon, CreditCard, DollarSign, Wallet } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Ride = () => {
  return (
    <main className="flex-1 p-6 overflow-auto">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
              <div className="bg-[#4D86FF] p-2 rounded-full mr-2">
                    <CalendarClockIcon className="h-5 w-5 text-white" />
                  </div>
                <div className="p-2 rounded-lg">
                  <span className="text-blue-600 font-medium">2023-04-12</span>
                </div>
              </div>
              <Image
                src="/driver.png"
                alt="Driver Profile"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="flex justify-between border-t pt-4 font-bold">
              <div>
                <h3 className="text-lg font-medium text-[#20386B]">Check In</h3>
                <p className="text-lg">
                  08:00 <span className="text-xs text-gray-500">AM</span>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#20386B]">Check Out</h3>
                <p className="text-lg">
                  09:48 <span className="text-xs text-gray-500">AM</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Image
                  src="/car.png"
                  alt="Car Image"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-lg mb-2"
                />
                <div className="bg-white p-3 rounded-lg border">
                  <p className="font-medium">497 Kilometer at start</p>
                </div>
              </div>
              <div>
                <Image
                  src="/car.png"
                  alt="Car Image"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-lg mb-2"
                />
                <div className="bg-white p-3 rounded-lg border">
                  <p className="font-medium">555 Kilometer at End</p>
                </div>
              </div>
              <div>
                <Image
                  src="/car.png"
                  alt="Car Image"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/car.png"
                  alt="Car Image"
                  width={300}
                  height={150}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center justify-center mb-4 gap-8 text-[#20386B]">
              <div className="flex items-center">
                <Image
                  src="/miniCar.png"
                  alt="Car Icon"
                  width={80}
                  height={50}
                  className="mr-4"
                />
                <div>
                  <p className="font-medium">Turbo Racer 3000</p>
                  <p className="text-sm text-gray-500">Number of car: 01</p>
                </div>
              </div>
              <div>
                <p className="font-medium">Car number</p>
                <p className="text-sm text-gray-500">DHA 1920</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-[#EDF3FF] p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-[#4D86FF] p-2 rounded-full mr-2">
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Online payment</span>
                </div>
                <p className="font-bold">$453</p>
              </div>
              <div className="bg-[#EDF3FF] p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-[#4D86FF] p-2 rounded-full mr-2">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Card Payment</span>
                </div>
                <p className="font-bold">$464</p>
              </div>
              <div className="bg-[#EDF3FF] p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-[#4D86FF] p-2 rounded-full mr-2">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">Cash Payment</span>
                </div>
                <p className="font-bold">$546</p>
              </div>
            </div>

            <div className="mt-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="pb-2 font-medium text-gray-600">Time</th>
                    <th className="pb-2 font-medium text-gray-600">Activity</th>
                    <th className="pb-2 font-medium text-gray-600">Payment method</th>
                    <th className="pb-2 font-medium text-gray-600">Payment amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3">09:00am - 09:25pm</td>
                    <td className="py-3">Hotel contract</td>
                    <td className="py-3">Contract</td>
                    <td className="py-3">Contract</td>
                  </tr>
                  <tr className="border-t bg-blue-50">
                    <td className="py-3">09:30am - 09:55pm</td>
                    <td className="py-3">Ride sharing</td>
                    <td className="py-3">Online</td>
                    <td className="py-3">$25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Ride

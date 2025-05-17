/* eslint-disable react/jsx-key */
import { FileText } from "lucide-react"
import Link from "next/link"

export default function RideSummary() {
  const rideData = [
    { date: "2023-04-12", totalRide: 47, earned: "$315" },
    { date: "2023-03-05", totalRide: 82, earned: "$153" },
    { date: "2023-01-22", totalRide: 29, earned: "$68" },
    { date: "2023-02-14", totalRide: "N/A", earned: "N/A" },
    { date: "2023-05-30", totalRide: 51, earned: "$29" },
    { date: "2023-06-18", totalRide: 34, earned: "$34" },
    { date: "2023-07-04", totalRide: 76, earned: "$364" },
    { date: "2023-08-09", totalRide: 18, earned: "$315" },
    { date: "2023-09-15", totalRide: 90, earned: "$533" },
    { date: "2023-10-31", totalRide: 25, earned: "$45" },
    { date: "2023-11-11", totalRide: 11, earned: "$53" },
    { date: "2023-12-25", totalRide: 58, earned: "$245" },
    { date: "2024-01-01", totalRide: 73, earned: "$145" },
    { date: "2024-02-29", totalRide: 42, earned: "$522" },
    { date: "2024-03-17", totalRide: 67, earned: "$67" },
  ]

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-full bg-blue-100 p-2">
          <FileText className="h-5 w-5 text-blue-500" />
        </div>
        <h2 className="text-lg font-medium">Ride summary</h2>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Total Ride
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Earned
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {rideData.map((ride, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <Link href={"/dashboard/ride"}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{ride.date}</td>
                  </Link>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{ride.totalRide}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{ride.earned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

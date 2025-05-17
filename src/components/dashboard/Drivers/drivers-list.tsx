import { ChevronDown } from "lucide-react"

export default function DriversList() {
  const drivers = [
    { name: "Alex Johnson", number: "+33 6 12 34 56 78", shift: "Shift A", color: "bg-blue-500" },
    { name: "Maria Gonzalez", number: "+33 7 23 45 67 89", shift: "Not assigned", color: "bg-gray-500" },
    { name: "Liam Smith", number: "+33 6 98 76 54 32", shift: "Shift A", color: "bg-blue-500" },
    { name: "Olivia Wilson", number: "+33 7 11 22 33 44", shift: "Shift B", color: "bg-orange-400" },
    { name: "Sophia Brown", number: "+33 6 55 66 77 88", shift: "Shift A", color: "bg-blue-500" },
    { name: "Noah Martinez", number: "+33 7 99 88 77 66", shift: "Shift B", color: "bg-orange-400" },
    { name: "Ethan Davis", number: "+33 6 44 33 22 11", shift: "Shift A", color: "bg-blue-500" },
    { name: "Ava Anderson", number: "+33 7 12 34 56 90", shift: "Shift B", color: "bg-orange-400" },
    { name: "Isabella Thomas", number: "+33 6 21 43 65 87", shift: "Shift A", color: "bg-blue-500" },
    { name: "Mason Taylor", number: "+33 7 32 54 76 98", shift: "Shift C", color: "bg-red-500" },
    { name: "Mason Taylor", number: "+33 6 77 88 99 00", shift: "Shift A", color: "bg-blue-500" },
    { name: "Mason Taylor", number: "+33 7 11 13 15 17", shift: "Shift L", color: "bg-orange-400" },
    { name: "Mason Taylor", number: "+33 6 22 24 26 28", shift: "Shift C", color: "bg-red-500" },
    { name: "Mason Taylor", number: "+33 7 33 35 37 39", shift: "Shift N", color: "bg-orange-400" },
    { name: "Mason Taylor", number: "+33 6 88 99 00 11", shift: "Shift A", color: "bg-blue-500" },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Driver Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Number
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Shift
            </th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {drivers.map((driver, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{driver.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{driver.number}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span
                    className={`${
                      driver.shift === "Not assigned" ? "bg-gray-200 text-gray-700" : `${driver.color} text-white`
                    } px-3 py-1 rounded-md text-sm font-medium flex-grow text-center max-w-[120px]`}
                  >
                    {driver.shift}
                  </span>
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

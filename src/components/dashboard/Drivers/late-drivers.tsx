import { AlertTriangle, Bell } from "lucide-react"

export default function LateDrivers() {
  const lateDrivers = [
    { name: "Alex Johnson" },
    { name: "Maria Gonzalez" },
    { name: "Liam Smith" },
    { name: "Olivia Wilson" },
    { name: "Sophia Brown" },
    { name: "Noah Martinez" },
  ]

  return (
    <div className="bg-white rounded-lg p-4 border">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-full bg-blue-500 text-white">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="font-medium">Late Drivers</h3>
      </div>

      <div className="space-y-3">
        {lateDrivers.map((driver, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
            <div className="text-sm font-medium">{driver.name}</div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

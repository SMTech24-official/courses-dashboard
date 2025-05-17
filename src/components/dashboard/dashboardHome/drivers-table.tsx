"use client"

import { Search } from "lucide-react"
import { useState } from "react"

interface Driver {
    id: string
    name: string
    carModel: string
    carNumber: string
    status: "Active" | "On Brake" | "Refilling"
}

const DRIVERS_DATA: Driver[] = [
    { id: "1", name: "Alex Johnson", carModel: "Turbo Racer 3000", carNumber: "ABC 1234", status: "Active" },
    { id: "2", name: "Maria Gonzalez", carModel: "Speedster X", carNumber: "XYZ 5678", status: "On Brake" },
    { id: "3", name: "Liam Smith", carModel: "EcoDrive Z", carNumber: "LMN 9101", status: "Active" },
    { id: "4", name: "Olivia Wilson", carModel: "Falcon Sport", carNumber: "DEF 3456", status: "Active" },
    { id: "5", name: "Sophia Brown", carModel: "Thunderbolt GT", carNumber: "QRS 2345", status: "Active" },
    { id: "6", name: "Noah Martinez", carModel: "Starlight 2022", carNumber: "GHI 7890", status: "Active" },
    { id: "7", name: "Ethan Davis", carModel: "Vortex Cruiser", carNumber: "TUV 6789", status: "Refilling" },
    { id: "8", name: "Ava Anderson", carModel: "Nighthawk V8", carNumber: "JKL 1234", status: "Active" },
    { id: "9", name: "Isabella Thomas", carModel: "Rally Master", carNumber: "PQR 9101", status: "On Brake" },
    { id: "10", name: "Mason Taylor", carModel: "Quantum Leap", carNumber: "MNO 5678", status: "Active" },
]

export default function DriversTable() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredDrivers = DRIVERS_DATA.filter(
        (driver) =>
            driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            driver.carModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            driver.carNumber.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-500 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold text-gray-700">Drivers list</h3>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-3 pr-10 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-600 text-sm">
                            <th className="pb-3 font-medium">Driver Name</th>
                            <th className="pb-3 font-medium">Car model</th>
                            <th className="pb-3 font-medium">Car No.</th>
                            <th className="pb-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDrivers.map((driver) => (
                            <tr key={driver.id} className="border-t">
                                <td className="py-3">{driver.name}</td>
                                <td className="py-3">{driver.carModel}</td>
                                <td className="py-3">{driver.carNumber}</td>
                                <td className="py-3">
                                    <span
                                        className={`px-4 py-1 rounded-full text-sm ${driver.status === "Active"
                                            ? "bg-blue-500 text-white"
                                            : driver.status === "On Brake"
                                                ? "bg-orange-400 text-white"
                                                : "bg-red-500 text-white"
                                            }`}
                                    >
                                        {driver.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

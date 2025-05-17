import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import DriversList from "./drivers-list"
import LateDrivers from "./late-drivers"
import NewDriversRequests from "./new-drivers-requests"


const drivers = () => {
    return (
        <main className="flex-1 p-4">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-2/3 bg-white rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#20386B] p-2 rounded-lg">
                            <div className="bg-blue-500 text-white p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <span className="font-medium">Drivers list</span>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <Button className="bg-blue-500 hover:bg-white outline hover:text-blue-500 rounded-full">
                                <Plus className="h-4 w-4 mr-1" />
                                Add Drivers
                            </Button>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-8 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                            </div>

                        </div>
                    </div>

                    {/* Drivers List Table */}
                    <DriversList />
                </div>

                <div className="lg:w-1/3 space-y-4">
                    {/* Late Drivers */}
                    <LateDrivers />

                    {/* New Drivers Requests */}
                    <NewDriversRequests />
                </div>
            </div>
        </main>
    )
}

export default drivers

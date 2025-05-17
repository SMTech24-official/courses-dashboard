import { ChevronLeft, ChevronRight } from "lucide-react"
import ShiftCard from "../shifts/shift-card"
import NewShiftForm from "./new-shift-form"

const NewShift = () => {
    return (
        <div className="flex">
            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="p-5 border-b bg-white rounded-3xl shadow-lg">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-semibold">All Shifts</h2>
                            <div className="flex gap-5 pl-6">
                                <button className="rounded-full border bg-[#EDF3FF] p-1 hover:bg-gray-50">
                                    <ChevronLeft className="h-5 w-5 text-gray-500" />
                                </button>
                                <button className="rounded-full border border-l-0 bg-[#EDF3FF] p-1 hover:bg-gray-50">
                                    <ChevronRight className="h-5 w-5 text-gray-500" />
                                </button>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                            <span className="text-xl">+ </span>
                            Create new shift
                        </button>
                    </div>

                    {/* Shift Cards */}
                    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <ShiftCard title="Shift-A" timeRange="(06.00 am- 12.00pm)" driverCount={850} iconColor="bg-yellow-100" />
                        <ShiftCard title="Shift-B" timeRange="(06.00 pm- 12.00am)" driverCount={850} iconColor="bg-pink-100" />
                        <ShiftCard title="Shift-C" timeRange="(06.00 am- 12.00pm)" driverCount={850} iconColor="bg-red-100" />
                    </div>
                </div>

                {/* Schedule */}
                <div className="border border-white rounded-sm p-2 mt-4">
                    <NewShiftForm />
                </div>
            </main>
        </div>
    )
}

export default NewShift

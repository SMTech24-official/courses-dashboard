import { Users, Car } from "lucide-react"

export default function DriverStats() {
    return (
        <div className="col-span-1 lg:col-span-2 bg-[#EDF3FF] rounded-xl p-4 shadow-sm border-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
                <div className="bg-[#FFFFFF] py-5 rounded-sm">
                    <div className="border-l-4 border-blue-500 pl-4 rounded-sm">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#4D86FF] rounded-full">
                                <Users className="w-6 h-6 text-white" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700">12,000 active drivers</h3>
                                <p className="text-sm text-gray-500">12,890 total drivers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] py-5 rounded-sm">
                    <div className="border-l-4 border-orange-500 pl-4 rounded-sm">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[#4D86FF] rounded-full">
                                <Car className="w-6 h-6 text-white" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-700">12,000 active Vehicles</h3>
                                <p className="text-sm text-gray-500">12,890 total drivers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

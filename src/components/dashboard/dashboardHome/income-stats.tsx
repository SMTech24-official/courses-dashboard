import { DollarSign } from "lucide-react"

export default function IncomeStats() {
    return (
        <div className="col-span-1 bg-[#EDF3FF] rounded-xl p-4 shadow-sm border-2">
            <div className="flex items-center gap-2 mb-6 text-2xl">
                <div className="p-2 bg-[#4D86FF] rounded-full">
                    <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-700">Total Income</h3>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="bg-[#FFFFFF] py-5 rounded-sm">
                    <div className="border-l-4 border-blue-500 pl-4 rounded-sm">
                        <p className="text-sm font-bold">Today</p>
                        <p className="text-xl font-bold">$6,895.78</p>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] py-5 rounded-sm">
                    <div className="border-l-4 border-orange-500 pl-4 rounded-sm">
                        <p className="text-sm font-bold">This Month</p>
                        <p className="text-xl font-bold">$165778.99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

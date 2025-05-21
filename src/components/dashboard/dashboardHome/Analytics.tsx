/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart3, ChevronLeft, ChevronRight } from "lucide-react"
import BarChartComponent from "./BarChartComponent"

type CourseProps = {
    allCourses: number;
};


const Analytics = ({ summaryData }: { summaryData: CourseProps }) => {
    if (!summaryData) {
        return (
            <section className="mb-6 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-medium text-gray-800">Courses</h2>
                <p className="text-center text-gray-500">Loading Courses...</p>
            </section>
        );
    }
    return (
        <section className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium text-gray-800">Analytics</h2>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 p-5 border-2 rounded-lg bg-[#EDF3FF]">
                    <div className="mb-4 flex items-center justify-between">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <div className="rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-800">April 2025</div>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="h-64 w-full">
                        <BarChartComponent />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="mb-4 flex items-center justify-between bg-[#EDF3FF] p-5 rounded-lg border-2">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex h-64 flex-col items-center justify-center rounded-lg bg-[#EDF3FF] p-6 border-2">
                        <div className="mb-2 flex justify-center">
                            <BarChart3 className="h-6 w-6 text-blue-800" />
                        </div>
                        <p className="text-center text-4xl font-bold text-gray-800">{summaryData?.allCourses}</p>
                        <p className="text-center text-sm text-gray-500">Total Course</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Analytics

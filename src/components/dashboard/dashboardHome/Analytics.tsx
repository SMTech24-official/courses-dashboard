import { BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import BarChartComponent from "./BarChartComponent";

type AnalyticsProps = {
  summaryData: {
    allVideos: number;
    allCourses: number;
    allStudents: number;
    allTeachers: number;
    allActiveUsers: number;
  } | null | undefined;
  isLoading?: boolean;
};

const Analytics = ({ summaryData, isLoading = false }: AnalyticsProps) => {
  const totalCourses = summaryData?.allCourses ?? 0;

  if (isLoading) {
    return (
      <section className="rounded-xl bg-white p-4 sm:p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Analytics</h2>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </section>
    );
  }

  if (!summaryData) {
    return (
      <section className="rounded-xl bg-white p-4 sm:p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium text-gray-800">Analytics</h2>
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">No analytics data available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-xl bg-white p-4 sm:p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-medium text-gray-800">Analytics</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {/* Chart Section */}
        <div className="md:col-span-2 lg:col-span-3 p-4 sm:p-5 border-2 rounded-lg bg-[#EDF3FF]">
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

        {/* Course Count Section */}
        <div className="md:col-span-1 lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between bg-[#EDF3FF] p-4 sm:p-5 rounded-lg border-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex h-64 flex-col items-center justify-center rounded-lg bg-[#EDF3FF] p-4 sm:p-6 border-2">
            <div className="mb-2 flex justify-center">
              <BarChart3 className="h-6 w-6 text-blue-800" />
            </div>
            <p className="text-center text-3xl sm:text-4xl font-bold text-gray-800">{totalCourses}</p>
            <p className="text-center text-sm text-gray-500">Total Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
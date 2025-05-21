
"use client";
import Analytics from "@/components/dashboard/dashboardHome/Analytics";
import Summary from "@/components/dashboard/dashboardHome/Summary";
import { useAllDashboardCountQuery } from "@/redux/features/courses/coursesApi";

export default function Dashboard() {
  const { data: summaries } = useAllDashboardCountQuery({});
      console.log(summaries)
      const summaryData = summaries?.data;
      
  return (
    <div className="">
      <div className="container mx-auto m-5">
        <Summary summaryData={summaryData}  />
        <div className="bg-white rounded-3xl p-4 mt-5 shadow-lg">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Sidebar */}
            {/* <DashboardSidebar /> */}

            {/* Main Content */}
            <div className="flex-1 space-y-4">
              {/* Income and Stats */}
              <Analytics summaryData={summaryData} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

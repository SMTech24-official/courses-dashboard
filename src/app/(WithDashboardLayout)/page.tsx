
// import DashboardSidebar from "@/components/dashboard-sidebar"
// import IncomeStats from "@/components/income-stats"
// import DriverStats from "@/components/driver-stats"
// import MapView from "@/components/map-view"
// import DriversTable from "@/components/drivers-table"

// import DriversTable from "@/components/dashboard/dashboardHome/drivers-table";
// // import DriverStats from "@/components/dashboard/dashboardHome/driver-stats";
// // import IncomeStats from "@/components/dashboard/dashboardHome/income-stats";
// import MapView from "@/components/dashboard/dashboardHome/map-view";
import Analytics from "@/components/dashboard/dashboardHome/Analytics";
import Summary from "@/components/dashboard/dashboardHome/Summary";

export default function Dashboard() {
  return (
    <div className="">
      <div className="container mx-auto m-5">
        <Summary />
        <div className="bg-white rounded-3xl p-4 mt-5 shadow-lg">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Sidebar */}
            {/* <DashboardSidebar /> */}

            {/* Main Content */}
            <div className="flex-1 space-y-4">
              {/* Income and Stats */}
              <Analytics />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

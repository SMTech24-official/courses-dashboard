import DriverProfile from "./driver-profile"
import RideSummary from "./ride-summary"

const ViewDriver = () => {
    return (
        <div className="grid grid-cols-1 p-5 gap-4 lg:grid-cols-[1fr_1fr]">
            <DriverProfile />
            <RideSummary />
        </div>
    )
}

export default ViewDriver

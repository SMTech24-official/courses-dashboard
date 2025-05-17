interface ShiftCardProps {
    title: string
    timeRange: string
    driverCount: number
    iconColor: string
}

export default function ShiftCard({ title, timeRange, driverCount, iconColor }: ShiftCardProps) {
    return (
        <div className="rounded-lg border-2 bg-[#EDF3FF] p-4 shadow-sm">
            <div className="flex items-start gap-3">
                <div className={`rounded-full p-2 ${iconColor}`}>
                    <div className="h-4 w-4"></div>
                </div>
                <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm">{timeRange}</p>
                    <p className="mt-1 text-sm">{driverCount} driver assigned</p>
                </div>
            </div>
        </div>
    )
}
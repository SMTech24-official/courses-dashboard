interface StatCardProps {
    icon: React.ReactNode
    title: string
    value: string
    bgColor: string
}

const StatCard = ({ icon, title, value, bgColor }: StatCardProps) => {
    return (
        <div className="bg-[#EDF3FF] p-6 rounded-lg shadow-sm flex items-center gap-4">
            <div className={`${bgColor} p-3 rounded-full`}>{icon}</div>
            <div>
                <h3 className="font-medium text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{value}</p>
            </div>
        </div>
    )
}

export default StatCard

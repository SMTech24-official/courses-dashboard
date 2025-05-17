interface StatusCardProps {
    icon: React.ReactNode
    title: string
    description: string
    iconBg: string
  }

const StatusCard = ({ icon, title, description, iconBg }: StatusCardProps) => {
    return (
        <div className="bg-[#EDF3FF] p-6 rounded-lg shadow-sm flex items-start space-x-4">
          <div className={`${iconBg} p-3 rounded-full`}>{icon}</div>
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      )
}

export default StatusCard

interface PaymentCardProps {
    icon: React.ReactNode
    title: string
    amount: string
}

const PaymentCard = ({ icon, title, amount }: PaymentCardProps) => {
    return (
        <div className="bg-[#EDF3FF] p-4 rounded-lg border">
            <div className="flex items-center mb-2">
                <div className="bg-[#4D86FF] p-2 rounded-full mr-2 font-bold text-white">{icon}</div>
                <div className="ml-2">
                    <span className="font-bold text-blue-900">{title}</span>
                    <p className="font-bold text-lg">{amount}</p>
                </div>
            </div>

        </div>
    )
}

export default PaymentCard

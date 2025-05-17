"use client"

export default function IncomeChart() {
    const chartData = [
        { date: "4/5/2025", amount: 350, color: "bg-blue-500" },
        { date: "5/5/2025", amount: 450, color: "bg-indigo-500" },
        { date: "6/5/2025", amount: 220, color: "bg-purple-500" },
        { date: "7/5/2025", amount: 600, color: "bg-green-500" },
        { date: "8/5/2025", amount: 350, color: "bg-yellow-500" },
        { date: "9/5/2025", amount: 700, color: "bg-red-500" },
        { date: "10/5/2025", amount: 550, color: "bg-teal-500" },
    ]

    return (
        <div className="w-full p-4">
            <div className="text-sm font-medium mb-4">Weekly Income Overview</div>
            <div className="relative h-[350px]">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500">
                    {["$700", "$600", "$500", "$400", "$300", "$200", "$100", "$000"].map((label, i) => (
                        <div key={i}>{label}</div>
                    ))}
                </div>

                {/* Bars container */}
                <div className="absolute left-14 right-0 top-0 bottom-20 flex items-end">
                    {chartData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center relative group" style={{ width: `${100 / chartData.length}%` }}>
                            <div
                                className={`${data.color} rounded-t-sm w-full mx-auto transition-all duration-200 hover:brightness-110`}
                                style={{
                                    height: `${(data.amount / 700) * 100}%`,
                                    maxWidth: "60px",
                                }}
                            />
                            <div
                                className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style={{ left: "50%", transform: "translateX(-50%)" }}
                            >
                                ${data.amount}
                            </div>
                            <div className="text-xs text-gray-500 mt-2">{data.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
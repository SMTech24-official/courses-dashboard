
export default function ShiftSchedule() {
    const days = [
        { day: "sun", date: 9 },
        { day: "mon", date: 10 },
        { day: "Tue", date: 11 },
        { day: "Wed", date: 12 },
        { day: "Thu", date: 13 },
        { day: "Fri", date: 14 },
        { day: "Sat", date: 15 },
    ]

    const hours = [
        "GMT+00",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
        "8pm",
        "9pm",
        "10pm",
        "11pm",
        "12pm",
        "1am",
        "2am",
        "3am",
        "4am",
        "5am",
        "6am",
    ]

    const shifts = [
        {
            day: 11,
            startHour: 6,
            endHour: 12,
            color: "bg-red-400",
            textColor: "text-white",
            time: "06.00 PM- 12.00PM",
            subTime: "06.00 PM- 12.00PM",
        },
        {
            day: 11,
            startHour: 13,
            endHour: 16,
            color: "bg-yellow-400",
            textColor: "text-black",
            time: "06.00 PM- 12.00PM",
            subTime: "06.00 PM- 12.00PM",
        },
        {
            day: 12,
            startHour: 8,
            endHour: 13,
            color: "bg-green-500",
            textColor: "text-white",
            time: "06.00 PM- 12.00PM",
            subTime: "06.00 PM- 12.00PM",
        },
        {
            day: 13,
            startHour: 6,
            endHour: 14,
            color: "bg-blue-500",
            textColor: "text-white",
            time: "06.00 PM- 12.00PM",
            subTime: "06.00 PM- 12.00PM",
        },
    ]

    return (
        <div className="overflow-x-auto mt-6">
            <div className="min-w-[1000px]">
                {/* Hours header */}
                <div className="grid grid-cols-[80px_repeat(18,1fr)] border-b">
                    {hours.map((hour, index) => (
                        <div key={index} className="border-r py-2 text-center text-sm text-gray-500 last:border-r-0">
                            {hour}
                        </div>
                    ))}
                </div>

                {/* Days and shifts */}
                <div>
                    {days.map((day, dayIndex) => (
                        <div key={dayIndex} className="grid grid-cols-[80px_repeat(18,1fr)] border-b">
                            {/* Day column */}
                            <div
                                className={`flex flex-col items-center justify-center border-r p-2 ${day.day === "Wed" ? "bg-blue-500 text-white rounded-full mx-2 my-1" : ""
                                    }`}
                            >
                                <div className="text-sm">{day.day}</div>
                                <div className="text-lg font-semibold">{day.date}</div>
                            </div>

                            {/* Hour cells */}
                            {Array.from({ length: 18 }).map((_, hourIndex) => (
                                <div key={hourIndex} className="border-r min-h-[60px] last:border-r-0"></div>
                            ))}

                            {/* Shifts */}
                            {shifts
                                .filter((shift) => shift.day === day.date)
                                .map((shift, shiftIndex) => {
                                    const startCol = shift.startHour - 5 // Adjust based on your hour mapping
                                    const duration = shift.endHour - shift.startHour

                                    return (
                                        <div
                                            key={shiftIndex}
                                            className={`absolute ml-[80px] h-[60px] rounded ${shift.color} ${shift.textColor} p-2`}
                                            style={{
                                                gridRow: dayIndex + 2,
                                                marginTop: dayIndex * 20,
                                                marginLeft: startCol * (100 / 18) + "%",
                                                width: duration * (100 / 18) + "%",
                                            }}
                                        >
                                            <div className="text-sm font-medium">{shift.time}</div>
                                            <div className="text-xs">{shift.subTime}</div>
                                        </div>
                                    )
                                })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

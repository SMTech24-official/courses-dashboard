

const BarChartComponent = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <div className="flex h-full items-end justify-between">
          {Array.from({ length: 30 }).map((_, i) => {
            // Generate random heights for the bars
            const height = Math.random() * 100
            // Make some bars darker blue to match the design
            const isHighlighted = i > 8 && i < 24

            return (
              <div
                key={i}
                className={`w-2 rounded-t ${isHighlighted ? "bg-blue-900" : "bg-gray-300"}`}
                style={{ height: `${height}%` }}
              ></div>
            )
          })}
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <div>08</div>
          <div>24</div>
        </div>
      </div>
    </div>
  )
}

export default BarChartComponent

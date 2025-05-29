import { useState, useEffect } from 'react';

const BarChartComponent = ({ isLoading = false }: { isLoading?: boolean }) => {
  const [data, setData] = useState<number[]>([]);
  
  useEffect(() => {
    // Simulate data loading
    if (!isLoading) {
      const newData = Array.from({ length: 30 }).map(() => Math.random() * 100);
      setData(newData);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Loading chart data...
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <div className="flex h-full items-end justify-between">
          {data.map((height, i) => {
            const isHighlighted = i > 8 && i < 24;
            return (
              <div
                key={i}
                className={`w-2 rounded-t transition-all duration-300 ${isHighlighted ? "bg-blue-900" : "bg-blue-300"}`}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <div>08</div>
          <div>24</div>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
type HotelItemProps = {
    name: string;
    due: string;
    calls: number | string;
    image: string;
    active?: boolean;
  };
  
  const HotelItem = ({ name, due, calls, active = false }: HotelItemProps) => {
    return (
      <div
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
          active ? "bg-blue-50 border border-blue-100" : "hover:bg-gray-50"
        }`}
      >
        <div className="flex-1">
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-gray-500">Due: {due}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Ride Call</p>
          <p className="text-sm font-medium">{calls}</p>
        </div>
      </div>
    );
  };
  
  export default HotelItem;
  


const TabButtton = ({ label, active }: { label: string; active?: boolean }) => {
    return (
        <button
          className={`flex-1 py-3 text-sm font-medium ${
            active ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600" : "text-gray-500"
          }`}
        >
          {label}
        </button>
      )
}

export default TabButtton

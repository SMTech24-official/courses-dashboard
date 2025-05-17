import { Car, Search, Trash2, Wrench } from "lucide-react"
import StatusCard from "./StatusCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

const CarInfo = () => {
    return (
        <main className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 bg-white p-5 rounded-lg shadow-md">
                <StatusCard
                    icon={<Car className="h-6 w-6 text-white" />}
                    title="Total Car"
                    description="10 car has damaged"
                    iconBg="bg-blue-500"
                />
                <StatusCard
                    icon={<Car className="h-6 w-6 text-white" />}
                    title="Active car"
                    description="10 car has damaged"
                    iconBg="bg-blue-500"
                />
                <StatusCard
                    icon={<Car className="h-6 w-6 text-white" />}
                    title="Damage car"
                    description="10 car has damaged"
                    iconBg="bg-blue-500"
                />
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 flex items-center">
                    <div className="flex items-center">
                        <div className="bg-blue-500 p-2 rounded-full mr-2">
                            <Car className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-lg font-medium">Car list</h2>
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                        <Button variant="outline" className="flex items-center space-x-2 border-blue-500 text-blue-500 rounded-full">
                            <Link href={"/dashboard/addNewCar"}>
                                <span>Add New Car</span>
                            </Link>
                        </Button>
                        <div className="relative">
                            <Input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-full w-64" />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-t border-b">
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Car image</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Car model</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Car No.</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <tr key={index} className="group border-b hover:bg-gray-50 mt-5">
                                    <td className="px-6 py-2 first:rounded-l-lg">
                                        <button className="text-red-500 hover:text-red-700">
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </td>
                                    <td className="p-2">
                                        <Image
                                            src="/miniCar.png"
                                            alt="Car"
                                            width={100}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium">Turbo Racer 3000</p>
                                            <p className="text-sm text-gray-500">Number of car: 01</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">DHA 1920</td>
                                    <td className="px-6 py-4 last:rounded-r-lg">
                                        <div className="flex items-center">
                                            <Wrench className="h-4 w-4 mr-2 text-gray-500" />
                                            <span>In maintenance</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default CarInfo
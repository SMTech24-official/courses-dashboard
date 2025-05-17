import { ArrowLeft, Car, Cloud, Info, Users } from "lucide-react"
import StatCard from "./StatCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const AddNewCar = () => {
  return (
    <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-white p-5 rounded-lg shadow-md">
            <StatCard
              icon={<Car size={24} className="text-white" />}
              title="Total Car"
              value="10 car has damaged"
              bgColor="bg-blue-500"
            />
            <StatCard
              icon={<Users size={24} className="text-white" />}
              title="Active car"
              value="10 car has damaged"
              bgColor="bg-blue-500"
            />
            <StatCard
              icon={<Info size={24} className="text-white" />}
              title="Damage car"
              value="10 car has damaged"
              bgColor="bg-blue-500"
            />
          </div>

          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="mb-6">
              <Button variant="outline" size="icon" className="bg-blue-500 text-white hover:bg-blue-600">
                <ArrowLeft size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="car-model" className="block mb-2 font-medium text-gray-700">
                  Car model
                </label>
                <Input id="car-model" placeholder="Write the car model here..." className="w-full" />
              </div>
              <div>
                <label htmlFor="car-no" className="block mb-2 font-medium text-gray-700">
                  Car no
                </label>
                <Input id="car-no" placeholder="Write the car no here..." className="w-full" />
              </div>
              <div>
                <label htmlFor="car-passenger" className="block mb-2 font-medium text-gray-700">
                  Car passenger set
                </label>
                <Input id="car-passenger" placeholder="Write the car no here..." className="w-full" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">Photo</label>
              <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                <div className="bg-blue-500 text-white p-3 rounded-full mb-4">
                  <Cloud size={24} />
                </div>
                <p className="text-gray-500 mb-2">Drag & drop your image here or click choose a file</p>
                <Button variant="link" className="text-blue-500">
                  Choose a file
                </Button>
              </div>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6">Save</Button>
          </div>
        </main>
  )
}

export default AddNewCar

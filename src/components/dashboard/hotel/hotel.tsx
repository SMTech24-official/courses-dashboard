import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FileText, MessageCircle, Plus, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import HotelItem from './HotelItem'
import StatCard from '../carInfo/StatCard'

const Hotel = () => {
    return (
        <main className="flex-1 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
                {/* Search and Add Hotel */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Hotel List */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <Button
                                variant="outline"
                                className="flex items-center gap-2 text-blue-500 border-blue-500 rounded-full"
                            >
                                <Plus size={16} />
                                <span>Add Hotel</span>
                            </Button>
                            <div className="flex-1 relative">
                                <Input
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 w-full rounded-full bg-blue-50"
                                />
                                <Search
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={18}
                                />
                                <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 rounded-full p-1 h-8 w-8">
                                    <Search className="text-white" size={16} />
                                </Button>
                            </div>
                        </div>
                        <HotelItem
                            name="The Grand Brooklyn Hotel"
                            image="/person2.png"
                            due="$482"
                            calls="47"
                            active
                        />
                        <HotelItem
                            name="Robertson's Retreat"
                            image="/placeholder.svg?height=50&width=50"
                            due="$739"
                            calls="82"
                        />
                        <HotelItem
                            name="Lane's Luxury Inn"
                            image="/placeholder.svg?height=50&width=50"
                            due="$256"
                            calls="29"
                        />
                        <HotelItem
                            name="Flores Plaza Hotel"
                            image="/placeholder.svg?height=50&width=50"
                            due="$913"
                            calls="64"
                        />
                        <HotelItem
                            name="Blackstone Suites"
                            image="/placeholder.svg?height=50&width=50"
                            due="$675"
                            calls="15"
                        />
                        <HotelItem
                            name="Cooper's Corner Inn"
                            image="/placeholder.svg?height=50&width=50"
                            due="$348"
                            calls="73"
                        />
                    </div>

                    {/* Stats and Hotel Details */}
                    <div className="lg:col-span-2 space-y-6 bg-[#EDF3FF] p-6">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 rounded-md">
                            <StatCard
                                icon={<FileText size={24} className="text-white" />}
                                title="Total Call"
                                value="756"
                                bgColor="bg-blue-500"
                            />
                            <StatCard
                                icon={<FileText size={24} className="text-white" />}
                                title="Due"
                                value="$445"
                                bgColor="bg-blue-500"
                            />
                        </div>

                        {/* Hotel Details - Fixed layout */}
                        <div className="rounded-lg overflow-hidden border flex flex-col md:flex-row">
                            <div className="md:w-1/2 p-4 m-5">
                                <div className="relative h-72 w-full">
                                    <Image
                                        src="/hotel.png"
                                        alt="Hotel"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 p-6 space-y-6 bg-white rounded-md m-5">
                                <div>
                                    <h3 className="text-sm text-gray-500 mb-1">Name</h3>
                                    <p className="font-medium">The Grand Brooklyn Hotel</p>
                                </div>
                                <div>
                                    <h3 className="text-sm text-gray-500 mb-1">Number</h3>
                                    <p className="font-medium">+33 7 23 45 67 89</p>
                                </div>
                                <div>
                                    <h3 className="text-sm text-gray-500 mb-1">Address</h3>
                                    <p className="font-medium">45 Rue de la Liberté, 75012 Paris, France</p>
                                </div>
                                <div>
                                    <h3 className="text-sm text-gray-500 mb-1">Per Ride Cost</h3>
                                    <p className="font-medium">$13</p>
                                </div>
                                <div className="mt-6">
                                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                                        <MessageCircle className="mr-2" size={18} />
                                        Message
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div>
                            <h3 className="font-medium mb-3">Map location</h3>
                            <div className="relative h-64 w-full bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src="/map2.png"
                                    alt="Map"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hotel
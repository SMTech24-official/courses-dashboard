/* eslint-disable @next/next/no-img-element */
import { Bell } from "lucide-react"
import Image from "next/image"

function DashboardHeader() {
    return (
        <div className="flex items-center justify-between p-5 border-b m-5
         bg-white rounded-3xl shadow-lg">
            <div className="flex items-center gap-4">
                <div className="">
                    <img src="/logo.png" alt="Logo" width={40} height={40} />
                </div>
                <div className="font-bold text-gray-700 text-lg">BLOG</div>
                <div className="text-gray-500">Friday, 28 FEbruary 2025</div>

            </div>

            
            <div className="flex items-center gap-4">
                <Bell className="text-gray-500" />
                <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Profile"
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-medium">Alexandra Christine</p>
                        <p className="text-xs text-gray-500">CEO of CarateCo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader

import { Button } from '@/components/ui/button'
import { CreditCard, DollarSign, Download, Wallet } from 'lucide-react'
import React from 'react'
import PaymentCard from './paymentCard'
import IncomeChart from './incomeChart'

const Income = () => {
    return (
        <main className="flex-1 p-6 overflow-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-700">Report of</span>
                        <span className="font-medium">4/5/2025</span>
                        <span className="text-gray-700">to</span>
                        <span className="font-medium">10/5/2025</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Button variant="outline" className="flex items-center space-x-2">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </Button>
                        <Button className="bg-blue-500 text-white hover:bg-blue-600">
                            Weekly report
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <PaymentCard icon={<Wallet className="h-5 w-5 text-white" />} title="Online payment" amount="$453" />
                    <PaymentCard icon={<CreditCard className="h-5 w-5 text-white" />} title="Card Payment" amount="$464" />
                    <PaymentCard icon={<DollarSign className="h-5 w-5 text-white" />} title="Cash Payment" amount="$546" />
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-lg font-medium mb-4">Income Overview</h2>
                <IncomeChart />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-lg font-medium mb-4">Ride sharing income</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PaymentCard icon={<Wallet className="h-5 w-5 text-white" />} title="Online payment" amount="$453" />
                    <PaymentCard icon={<CreditCard className="h-5 w-5 text-white" />} title="Card Payment" amount="$464" />
                    <PaymentCard icon={<DollarSign className="h-5 w-5 text-white" />} title="Cash Payment" amount="$546" />
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-medium mb-4">Hotel taxi income</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PaymentCard icon={<CreditCard className="h-5 w-5 text-white" />} title="Card Payment" amount="$464" />
                    <PaymentCard icon={<DollarSign className="h-5 w-5 text-white" />} title="Cash Payment" amount="$546" />
                    <div></div> {/* Empty div to maintain grid layout */}
                </div>
            </div>
        </main>
    )
}

export default Income

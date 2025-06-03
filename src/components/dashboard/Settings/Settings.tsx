import { Lock } from "lucide-react"
import SettingsForm from "./SettingsForm"


const Settings = () => {
    return (
        <main className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="flex">
                        {/* Form Section */}
                        <div className="flex-1 p-8">
                            <div className="max-w-md mx-auto">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Password</h2>
                                    <p className="text-gray-600">Give me correct password and change password</p>
                                </div>

                                <SettingsForm />
                            </div>
                        </div>

                        {/* Illustration Section */}
                        <div className="w-80 bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8">
                            <div className="relative">
                                {/* Security illustration */}
                                <div className="w-48 h-48 relative">
                                    <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
                                            <Lock className="w-12 h-12 text-gray-400" />
                                        </div>
                                        <div className="w-16 h-20 bg-purple-600 rounded-lg flex items-center justify-center mx-auto">
                                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Decorative dots */}
                                    <div className="absolute top-4 right-8 w-2 h-2 bg-purple-300 rounded-full"></div>
                                    <div className="absolute bottom-8 left-4 w-1 h-1 bg-purple-300 rounded-full"></div>
                                    <div className="absolute top-12 left-8 w-1 h-1 bg-purple-300 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Settings

import Image from "next/image"


const CourseCard = () => {
    return (
        <div className="overflow-hidden rounded-lg">
            <div className="relative">
                <div className="relative">
                    <div className="aspect-video w-full overflow-hidden">
                        {/* People sitting back to back */}
                        <div className="relative z-10 flex items-center justify-center">
                            <Image
                                src="/CourseCard.png"
                                alt="People working on UI/UX"
                                width={256}
                                height={128}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4">
                <h3 className="font-medium text-gray-800">UI/UX Fundamental</h3>
            </div>
        </div>
    )
}

export default CourseCard

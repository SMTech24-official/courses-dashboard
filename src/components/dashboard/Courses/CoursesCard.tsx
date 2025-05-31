import { ThumbsUp } from "lucide-react"
import Image from "next/image"

type BlogProps = {
    blog: {
        thumbnailUrl?: string;
        title?: string;
        description?: string;
        createdAt?: string | Date;
        user?: {
            username?: string;
            role?: string;
        };
    };
};


const CoursesCard = ({ blog }: BlogProps) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <div className="relative">
                <div className="relative">
                    <div className="aspect-video w-full overflow-hidden">
                        {/* People sitting back to back */}
                        <div className="relative z-10 flex items-center justify-center">
                            <Image
                                src={blog.thumbnailUrl ?? "/courseCover.png"}
                                alt="People working on UI/UX"
                                width={256}
                                height={128}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between bg-white p-4">
                <div>
                    <h3 className="font-medium text-gray-800">{blog.title}</h3>
                    <p className="text-xs text-gray-500">By: {blog.user?.username || "Unknown Author"} {blog.user?.role ? `(${blog.user.role})` : ""}</p>
                </div>
                <button className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-200">
                    <ThumbsUp className="h-3 w-3" />
                    <span>Make Recommended</span>
                </button>
            </div>
        </div>
    )
}

export default CoursesCard

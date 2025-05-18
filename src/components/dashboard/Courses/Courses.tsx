import { Search } from "lucide-react"
import TotalBlogs from "../Blogs/TotalBlogs"
import CoursesCard from "./CoursesCard"


const Courses = () => {
    return (
        <div className="p-5">
            <TotalBlogs />

            <section className="rounded-xl bg-white p-6 shadow-sm">
                {/* Search Bar */}
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <CoursesCard key={item} />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Courses

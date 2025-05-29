/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Search } from "lucide-react"
import CoursesCard from "./CoursesCard"
import { useState } from "react";
import { useAllDashboardCountQuery } from "@/redux/features/courses/coursesApi";


const Courses = () => {
    const { data: courses, isLoading: isCountLoading, error: countError } = useAllDashboardCountQuery({});
    const coursesData = courses?.data;    
    const [showAll, setShowAll] = useState(false);

    if (isCountLoading) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-5 flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (countError) {
        return <div className="px-4 sm:px-6 lg:px-8 py-5">Error loading blogs. Please try again.</div>;
    }

    const displayedCourses = showAll ? coursesData?.allCoursesDetails : coursesData?.allCoursesDetails.slice(0, 4);
    return (
        <div className="p-5">

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
                    {displayedCourses?.map((blog: any) => (
                        <CoursesCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </section>

            {!showAll && coursesData?.allCoursesDetails?.length > 4 && (
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                        Show More
                    </button>
                </div>
            )}

        </div>
    )
}

export default Courses

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAllLibraryQuery } from "@/redux/features/library/libraryApi";
import CourseCard from "./CourseCard";

const Course = () => {
  const { data: library, isLoading: isCountLoading, error: countError } = useAllLibraryQuery({});
  const libraryData = library?.data;
  const [showAll, setShowAll] = useState(false);

  if (isCountLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-5 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (countError) {
    return <div className="px-4 sm:px-6 lg:px-8 py-5 text-red-500">Error loading courses. Please try again.</div>;
  }

  if (!libraryData || libraryData.length === 0) {
    return (
      <section className="mb-6 rounded-xl bg-white p-6 shadow-lg">
        <div className="text-center py-8 text-gray-500">
          No courses available at the moment.
        </div>
      </section>
    );
  }

  const displayedCourses = showAll ? libraryData : libraryData.slice(0, 3);

  return (
    <section className="mb-6 rounded-xl bg-white p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedCourses.map((library: any) => (
          <CourseCard key={library.id} library={library} />
        ))}
      </div>

      {libraryData.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            {showAll ? "Show Less" : "See More Courses"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Course;
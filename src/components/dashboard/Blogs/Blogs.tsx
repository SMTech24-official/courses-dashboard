/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAllBlogsCountQuery } from "@/redux/features/blogs/blogsApi";
import BlogCard from "./BlogCard";
import TotalBlogs from "./TotalBlogs";
import Link from "next/link";
import { useState } from "react";

const Blogs = () => {
  const { data: blogs, isLoading: isCountLoading, error: countError } = useAllBlogsCountQuery({});
  const blogsData = blogs?.data;
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

  const displayedBlogs = showAll ? blogsData?.allBlogs : blogsData?.allBlogs.slice(0, 4);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-5 space-y-6">
      <TotalBlogs blogsData={blogsData} />

      <section className="relative rounded-xl bg-white p-4 sm:p-6 shadow-lg">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-800">All Blogs</h2>
          <Link href="/dashboard/createBlog">
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              Add new blog
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
          {displayedBlogs?.map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {!showAll && blogsData?.allBlogs?.length > 4 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Show More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
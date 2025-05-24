"use client";
import { useAllBlogsCountQuery, useAllBlogsQuery} from "@/redux/features/blogs/blogsApi";
import BlogCard from "./BlogCard";
import TotalBlogs from "./TotalBlogs";
import Link from "next/link";

const Blogs = () => {
  const { data: blogs } = useAllBlogsCountQuery({});
  // console.log(blogs);

  const blogsData = blogs?.data;

  const { data: blogsDetails } = useAllBlogsQuery({});
  console.log(blogsDetails);
  

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-5 space-y-6">
  {/* Summary */}
  <TotalBlogs blog={blogsData} />

  {/* Blogs Section */}
  <section className="relative rounded-xl bg-white p-4 sm:p-6 shadow-lg">
    <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
      <h2 className="text-lg font-semibold text-gray-800">All Blogs</h2>
      <Link href="/dashboard/createBlog">
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
          Add new blog
        </button>
      </Link>
    </div>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((item) => (
        <BlogCard
          key={item}
          blog={{
            title: "",
            description: "",
            thumbnail: "",
            author: "",
            createdAt: ""
          }}
        />
      ))}
    </div>
  </section>
</div>

  );
};

export default Blogs;

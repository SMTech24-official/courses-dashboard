
import BlogCard from "./BlogCard"
import TotalBlogs from "./TotalBlogs"
import Link from "next/link"


const Blogs = () => {
  return (
    <div className="p-5">
      <TotalBlogs />
      <section className="relative rounded-xl bg-white p-6 shadow-lg">
        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <BlogCard key={item} />
          ))}
        </div>

        {/* Add New Blog Button */}
        <div className="absolute bottom-6 right-6">
          <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
            <Link href="/dashboard/createBlog">
              <span>Add new blog</span>
            </Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Blogs

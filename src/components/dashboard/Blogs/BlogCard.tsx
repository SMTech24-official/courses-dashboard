// src/components/BlogCard.tsx
import Image from "next/image";

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

const BlogCard = ({ blog }: BlogProps) => {
  console.log(blog); // Keep for debugging, remove in production
  return (
    <div className="overflow-hidden rounded-lg border shadow">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={blog.thumbnailUrl || "/CourseCard.png"}
            alt={blog.title || "Blog Image"}
            width={256}
            height={128}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-white p-4">
        <h3 className="font-medium text-gray-800">{blog.title || "Untitled Blog"}</h3>
        <p className="text-xs text-gray-500 mb-1">
          By: {blog.user?.username || "Unknown Author"} {blog.user?.role ? `(${blog.user.role})` : ""}
        </p>
        <p className="text-sm text-gray-600">{blog.description || "No description available"}</p>
        <p className="text-xs text-gray-400 mt-2">
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : "Date not available"}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
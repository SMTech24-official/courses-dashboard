"use client";

import { useRecommendCourseMutation } from "@/redux/features/courses/coursesApi";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type BlogProps = {
  blog: {
    id: string;
    thumbnailUrl?: string;
    title?: string;
    description?: string;
    createdAt?: string | Date;
    recommended?: boolean;
    user?: {
      username?: string;
      role?: string;
    };
  };
};

const CoursesCard = ({ blog }: BlogProps) => {
  const [recommendCourse, { isLoading }] = useRecommendCourseMutation();
  const [isRecommended, setIsRecommended] = useState(blog.recommended || false);

  const handleRecommend = async () => {
    try {
      await recommendCourse(blog.id).unwrap();
      toast.success("Course recommended!");
      setIsRecommended(true);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to recommend course");
    }
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-md border">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={blog.thumbnailUrl ?? "/courseCover.png"}
            alt="Course Thumbnail"
            width={256}
            height={128}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-between bg-white p-4">
        <div>
          <h3 className="font-medium text-gray-800">{blog.title}</h3>
          <p className="text-xs text-gray-500">
            By: {blog.user?.username || "Unknown"}{" "}
            {blog.user?.role ? `(${blog.user.role})` : ""}
          </p>
        </div>
        <button
          onClick={handleRecommend}
          disabled={isLoading || isRecommended}
          className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium 
            ${
              isRecommended
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
            } disabled:opacity-50`}
        >
          <ThumbsUp className="h-3 w-3" />
          <span>{isRecommended ? "Recommended" : "Make Recommended"}</span>
        </button>
      </div>
    </div>
  );
};

export default CoursesCard;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { useRecommendCourseMutation } from "@/redux/features/courses/coursesApi";
import { ThumbsUp, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type BlogProps = {
  blog: {
    id: string;
    thumbnailUrl?: string;
    name?: string;
    description?: string;
    createdAt?: string | Date;
    recommended?: boolean;
    user?: {
      username?: string;
      role?: string;
    };
  };
  onDelete?: (id: string) => void;
};

const CoursesCard = ({ blog, onDelete }: BlogProps) => {
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

  const handleDelete = () => {
    if (onDelete) {
      onDelete(blog.id);
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
          <h3 className="font-medium text-gray-800">{blog.name}</h3>
          <p className="text-xs text-gray-500">
            By: {blog.user?.username || "Unknown"}{" "}
            {blog.user?.role ? `(${blog.user.role})` : ""}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleDelete}
            variant="outline"
            size="sm"
            className="text-gray-600 hover:text-red-600 hover:border-red-300 bg-transparent"
          >
            <Trash2 className="w-4 h-4" />
          </Button>

          <Button
            onClick={handleRecommend}
            disabled={isLoading || isRecommended}
            size="sm"
            className={`flex items-center gap-1 ${
              isRecommended
                ? "bg-green-100 text-green-600 hover:bg-green-200"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <ThumbsUp className="h-4 w-4" />
            {isRecommended ? "Recommended" : "Recommend"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

import Image from "next/image"

type BlogProps = {
  blog: {
    title: string;
    description: string;
    thumbnail: string;
    author: string;
    createdAt: string;
  };
};


const BlogCard = ({blog}: BlogProps) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          {/* People sitting back to back */}
          <div className="relative z-10 flex items-center justify-center">
            <Image
              src="/CourseCard.png"
              alt="People working on UI/UX"
              width={256}
              height={128}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white p-4">
        <div>
          <h3 className="font-medium text-gray-800">UI/UX Fundamental</h3>
          <p className="text-xs text-gray-500">By: Mr. Rahman</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-gray-800">32</p>
          <p className="text-xs text-gray-500">Documents</p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

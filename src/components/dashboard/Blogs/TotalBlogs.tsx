import { BookOpen, User, Users } from "lucide-react";

type TotalBlogsProps = {
  blogsData: {
    allBlogsCount: number;
    teacherBlogsCount: number;
    adminBlogsCount: number;
  };
};


const TotalBlogs = ({blogsData }: TotalBlogsProps) => {
    // console.log(blogsData);
    return (
        <section className="mb-6 rounded-xl bg-white p-4 sm:p-6 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Total Blogs */}
                <div className="rounded-lg bg-[#EDF3FF] border-2 p-4 sm:p-6">
                    <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#386AD3] text-white">
                            <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-gray-800">{blogsData?.allBlogsCount}</p>
                            <p className="text-sm text-gray-500">Total blogs</p>
                        </div>
                    </div>
                </div>

                {/* Blogs by Admin */}
                <div className="rounded-lg bg-[#EDF3FF] border-2 p-4 sm:p-6">
                    <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#386AD3] text-white">
                            <User className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-gray-800">
                                {blogsData?.adminBlogsCount}
                            </p>
                            <p className="text-sm text-gray-500">Blog by admin</p>
                        </div>
                    </div>
                </div>

                {/* Blogs by Teacher */}
                <div className="rounded-lg bg-[#EDF3FF] border-2 p-4 sm:p-6">
                    <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#386AD3] text-white">
                            <Users className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xl sm:text-2xl font-bold text-gray-800">{blogsData?.teacherBlogsCount || 0}</p>
                            <p className="text-sm text-gray-500">Blog by teacher</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TotalBlogs;

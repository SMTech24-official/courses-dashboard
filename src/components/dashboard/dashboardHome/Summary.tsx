import { GraduationCap, Video } from "lucide-react";

type SummaryProps = {
    summaryData: {
        allVideos: number;
        allCourses: number;
        allStudents: number;
        allTeachers: number;
        allActiveUsers: number;
    } | null | undefined;
};

const Summary = ({ summaryData }: SummaryProps) => {
    console.log(summaryData)

    if (!summaryData) {
        return (
            <section className="mb-6 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-medium text-gray-800">Summary</h2>
                <p className="text-center text-gray-500">Loading summary...</p>
            </section>
        );
    }


    return (
        <section className="mb-6 rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium text-gray-800">Summary</h2>
            <div className="grid grid-cols-4 gap-4">
                <SummaryCard icon={<Video className="h-6 w-6 text-gray-700" />} count={summaryData?.allVideos} label="Total Videos" />
                <SummaryCard icon={<GraduationCap className="h-6 w-6 text-gray-700" />} count={summaryData?.allStudents} label="Student" />
                <SummaryCard icon={<BookIcon />} count={summaryData?.allTeachers} label="Teachers" />
                <SummaryCard icon={<InfoIcon />} count={summaryData?.allActiveUsers} label="Online" />
            </div>
        </section>
    );
};

const SummaryCard = ({ icon, count, label }: { icon: React.ReactNode; count: number; label: string }) => (
    <div className="rounded-lg bg-[#EDF3FF] border-2 p-6">
        <div className="mb-2 flex justify-center">{icon}</div>
        <p className="text-center text-4xl font-bold text-gray-800">{count}</p>
        <p className="text-center text-sm text-gray-500">{label}</p>
    </div>
);

const BookIcon = () => (
    <svg className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11.08V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V16.08" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V10Z" fill="currentColor" />
        <path d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15Z" fill="currentColor" />
    </svg>
);

const InfoIcon = () => (
    <svg className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Summary;

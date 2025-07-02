// src/components/BlogCard.tsx
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";

type AdsProps = {
    ad: {
        id: string;
        thumbnailUrl?: string;
        title?: string;
        createdAt?: string | Date;
        user?: {
            username?: string;
            role?: string;
        };
    };
    onDelete?: (id: string) => void;
};

const AdsCard = ({ ad, onDelete }: AdsProps) => {
    console.log(ad); // Keep for debugging, remove in production

    const handleDelete = () => {
        if (onDelete) {
            onDelete(ad.id);
        }
    };

    return (
        <div className="overflow-hidden rounded-lg border shadow">
            <div className="relative">
                <div className="aspect-video w-full overflow-hidden">
                    <Image
                        src={ad.thumbnailUrl || "/CourseCard.png"}
                        alt={ad.title || "Ads Image"}
                        width={256}
                        height={128}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="bg-white p-4 flex items-center justify-between space-x-2">

                <h3 className="font-medium text-gray-800">{ad.title || "Untitled Ad"}</h3>
                <Button
                    onClick={handleDelete}
                    variant="outline"
                    size="sm"
                    className="text-gray-600 hover:text-red-600 hover:border-red-300 bg-transparent"
                >
                    <Trash2 className="w-4 h-4" />
                    Delete Ads
                </Button>
            </div>
        </div>
    );
};

export default AdsCard;
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import AdsCard from "./AdsCard";
import { toast } from "sonner";
import { useAllAdsCountQuery, useDeleteAdsMutation } from "@/redux/features/ads/ads";

const Ads = () => {
  const { data: ads, isLoading, error } = useAllAdsCountQuery({});
  const [deleteAd] = useDeleteAdsMutation();

  const [adsData, setAdsData] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);

  // Initialize local ads list when loaded
  useEffect(() => {
    if (ads?.data?.allAds) {
      setAdsData(ads.data.allAds);
    }
  }, [ads]);

  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-5 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="px-4 sm:px-6 lg:px-8 py-5">Error loading ads. Please try again.</div>;
  }

  const displayedAds = showAll ? adsData : adsData.slice(0, 4);

  const handleDeleteAd = async (id: string) => {
    try {
      await deleteAd(id).unwrap();
      toast.success("Ad deleted successfully");
      setAdsData((prev) => prev.filter((ad) => ad.id !== id));
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to delete ad");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-5 space-y-6">
      <section className="relative rounded-xl bg-white p-4 sm:p-6 shadow-lg">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-800">All Ads</h2>
          <Link href="/dashboard/createAds">
            <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
              Add New Ads
            </button>
          </Link>
        </div>

        {displayedAds?.length === 0 ? (
          <p className="text-gray-500 text-sm">No ads found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
            {displayedAds?.map((ad: any) => (
              <AdsCard key={ad.id} ad={ad} onDelete={handleDeleteAd} />
            ))}
          </div>
        )}

        {!showAll && adsData?.length > 4 && (
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

export default Ads;

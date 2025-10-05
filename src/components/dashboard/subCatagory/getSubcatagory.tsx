'use client';
import { SubCategory, useDeleteSubCategoryMutation, useGetAllSubCategoriesQuery } from "@/redux/features/api/catagory";
import React, { useMemo, useState } from "react";

const SubCategoryList: React.FC = () => {
  const { data, isLoading, isError, error, refetch } = useGetAllSubCategoriesQuery();
  const [deleteSubCategory, { isLoading: deleting }] = useDeleteSubCategoryMutation();

  console.log("SubCategory Data:", data); // Debug: Check if the data is coming

  // optional: quick filter by country
  const [countryFilter, setCountryFilter] = useState<string>("");

  // Ensure that data is an array
  const rows = useMemo<SubCategory[]>(() => {
    // Debug: Check the actual structure
    console.log("Raw data in useMemo:", data);
    console.log("Is Array?", Array.isArray(data));
    console.log("Data type:", typeof data);
    
    // Try accessing data.data if it's nested, or use data directly if it's an array
    const actualData = Array.isArray(data) ? data : (data as any)?.data;
    
    console.log("Actual data:", actualData);
    console.log("Is actual data array?", Array.isArray(actualData));
    
    if (!Array.isArray(actualData)) {
      console.log("No valid array found");
      return [];
    }
    
    console.log("Country filter:", countryFilter);
    
    if (!countryFilter) {
      console.log("No filter, returning all data:", actualData.length, "items");
      return actualData;
    }
    
    const filtered = actualData.filter((r) => {
      const itemCountry = (r.country ?? "").toLowerCase();
      return itemCountry === countryFilter.toLowerCase();
    });
    
    console.log("Filtered data:", filtered.length, "items");
    return filtered;
  }, [data, countryFilter]);

  const countryOptions = useMemo(() => {
    const set = new Set<string>();
    
    // Get actual data array
    const actualData = Array.isArray(data) ? data : (data as any)?.data;
    
    // Filter out entries with null or undefined country
    if (Array.isArray(actualData)) {
      actualData.forEach((r) => {
        if (r.country) {
          set.add(r.country);  // Only add non-null countries
        }
      });
    }
    return Array.from(set).sort();
  }, [data]);

  const handleDelete = async (id: string, name?: string) => {
    const ok = window.confirm(`Delete sub-category${name ? ` "${name}"` : ""}?`);
    if (!ok) return;
    try {
      await deleteSubCategory(id).unwrap();
      // Auto-refresh data after successful deletion
      refetch();
    } catch (e) {
      console.error(e);
      alert("Failed to delete. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="rounded-xl border p-6">Loading sub-categories…</div>
      </div>
    );
  }

  if (isError) {
    const message =
      (error as any)?.data?.message || (error as any)?.error || "Failed to load sub-categories.";
    return (
      <div className="p-4">
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
          {message}
          <button
            onClick={() => refetch()}
            className="ml-3 rounded-lg bg-red-600 px-3 py-1.5 text-white"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6">
      <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h1 className="text-xl font-semibold">Sub-Categories</h1>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Filter by country:</label>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="rounded-lg border px-3 py-2"
          >
            <option value="">All</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
              <th className="sticky left-0 z-10 border-b px-4 py-3">#</th>
              <th className="border-b px-4 py-3">Category Name</th>
              <th className="border-b px-4 py-3">SubCategory Name</th>
              <th className="border-b px-4 py-3">SubCategory2</th>
              <th className="border-b px-4 py-3">Country</th>
              <th className="border-b px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-500">
                  No sub-categories found.
                </td>
              </tr>
            ) : (
              rows.map((row, idx) => (
                <tr key={row.id} className="text-sm even:bg-gray-50/40">
                  <td className="sticky left-0 z-0 bg-inherit px-4 py-3">{idx + 1}</td>
                  <td className="px-4 py-3">
                    {row.category?.name ?? "—"}
                  </td>
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  {/* SubCategory2 dropdown aligned with row */}
                  <td className="px-4 py-3">
                    {(row.subcategories2 ?? []).length > 0 ? (
                      <select
                        className="w-full rounded-lg border px-2 py-1 appearance-none bg-white pr-8 cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em'
                        }}
                        value={row.subcategories2?.[0]?.id || ""}
                        onChange={() => {}}
                      >
                        {row.subcategories2?.map((sc2) => (
                          <option key={sc2.id} value={sc2.id}>
                            {sc2.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {row.country ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleDelete(row.id, row.name)}
                        disabled={deleting}
                        className="rounded-lg border border-red-600 px-3 py-1.5 text-red-600 hover:bg-red-50 disabled:opacity-60"
                        title="Delete sub-category"
                      >
                        {deleting ? "Deleting…" : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubCategoryList;
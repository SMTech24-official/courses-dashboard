'use client';
import { SubCategory, useDeleteSubCategoryMutation, useDeleteSubCategory2Mutation, useGetAllSubCategoriesQuery } from "@/redux/features/api/catagory";
import React, { useMemo, useState } from "react";

const SubCategoryList: React.FC = () => {
  const { data, isLoading, isError, error, refetch } = useGetAllSubCategoriesQuery();
  const [deleteSubCategory, { isLoading: deleting }] = useDeleteSubCategoryMutation();
  const [deleteSubCategory2] = useDeleteSubCategory2Mutation();

  console.log("SubCategory Data:", data); // Debug: Check if the data is coming

  // optional: quick filter by country
  const [countryFilter, setCountryFilter] = useState<string>("");

  // State to track which dropdown is expanded
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);

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

  const handleDeleteSubCategory2 = async (id: string, name?: string) => {
    const ok = window.confirm(`Delete SubCategory2${name ? ` "${name}"` : ""}?`);
    if (!ok) return;
    try {
      await deleteSubCategory2(id).unwrap();
      refetch();
    } catch (e) {
      console.error(e);
      alert("Failed to delete SubCategory2. Please try again.");
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
              <th className="border-b px-4 py-3">Subject</th>
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
                  {/* SubCategory2 dropdown with delete icons */}
                  <td className="px-4 py-3">
                    {(row.subcategories2 ?? []).length > 0 ? (
                      <div className="relative">
                        <div 
                          className="flex items-center gap-2 cursor-pointer rounded-lg border bg-white px-3 py-2 hover:border-gray-400"
                          onClick={() => setExpandedDropdown(expandedDropdown === row.id ? null : row.id)}
                        >
                          <span className="flex-1 text-sm">
                            {row.subcategories2?.[0]?.name}
                            {row.subcategories2 && row.subcategories2.length > 1 && (
                              <span className="ml-2 text-xs text-gray-500">
                                (+{row.subcategories2.length - 1} more)
                              </span>
                            )}
                          </span>
                          <svg 
                            className={`h-4 w-4 text-gray-600 transition-transform ${expandedDropdown === row.id ? 'rotate-180' : ''}`}
                            fill="none" 
                            viewBox="0 0 20 20"
                          >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4"/>
                          </svg>
                        </div>
                        
                        {/* Dropdown list */}
                        {expandedDropdown === row.id && (
                          <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-y-auto rounded-lg border bg-white shadow-lg">
                            {(row.subcategories2 || []).map((sc2) => (
                              <div 
                                key={sc2.id}
                                className="flex items-center justify-between gap-2 border-b px-3 py-2 hover:bg-gray-50 last:border-b-0"
                              >
                                <span className="flex-1 text-sm">{sc2.name}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteSubCategory2(sc2.id, sc2.name);
                                  }}
                                  className="rounded p-1 text-red-600 hover:bg-red-50"
                                  title="Delete SubCategory2"
                                >
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
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
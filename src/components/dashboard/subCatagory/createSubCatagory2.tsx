'use client';
import React, { useState } from "react";
import { useCreateSubCategory2Mutation, useGetAllCategoriesWithSubcategoriesQuery } from "@/redux/features/api/catagory";

const CreateSubCategory2Form: React.FC = () => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");

  const { data: categoryResponse, isLoading: loadingCategories } = useGetAllCategoriesWithSubcategoriesQuery();
  const [createSubCategory2, { isLoading }] = useCreateSubCategory2Mutation();

  console.log("Category Response:", categoryResponse);

  // Extract categories from response
  const categories = categoryResponse?.data || [];

  // Get subcategories filtered by selected category
  const filteredSubCategories = React.useMemo(() => {
    if (!categoryId) return [];
    const selectedCategory = categories.find(cat => cat.id === categoryId);
    return selectedCategory?.subcategories || [];
  }, [categoryId, categories]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !categoryId || !subCategoryId) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createSubCategory2({
        name: name.trim(),
        categoryId,
        subCategoryId,
      }).unwrap();
      
      // Reset form
      setName("");
      setCategoryId("");
      setSubCategoryId("");
      
      alert("SubCategory2 created successfully!");
    } catch (error) {
      console.error("Failed to create SubCategory2:", error);
      alert("Failed to create SubCategory2. Please try again.");
    }
  };

  if (loadingCategories) {
    return (
      <div className="mx-auto max-w-2xl p-4 sm:p-6">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="text-center text-gray-600">Loading categories...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-4 sm:p-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">Create SubCategory2</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* SubCategory2 Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              SubCategory2 Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter SubCategory2 name (e.g., English, Math)"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Category Selection */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
                setSubCategoryId(""); // Reset subcategory when category changes
              }}
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* SubCategory Selection */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              SubCategory <span className="text-red-500">*</span>
            </label>
            <select
              value={subCategoryId}
              onChange={(e) => setSubCategoryId(e.target.value)}
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
              required
              disabled={!categoryId}
            >
              <option value="">-- Select SubCategory --</option>
              {filteredSubCategories.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name} {sub.country ? `(${sub.country})` : ''}
                </option>
              ))}
            </select>
            {!categoryId && (
              <p className="mt-1 text-xs text-gray-500">
                Please select a category first
              </p>
            )}
            {categoryId && filteredSubCategories.length === 0 && (
              <p className="mt-1 text-xs text-amber-600">
                No subcategories found for this category
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isLoading ? "Creating..." : "Create SubCategory2"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSubCategory2Form;
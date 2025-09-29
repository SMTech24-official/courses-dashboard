'use client';
// src/pages/SubCategoryPage.tsx
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type CreateSubCategoryBody = {
  name: string;
  categoryId: string;
  country: string;
};

type Category = {
  id: string;
  name: string;
};

const API_BASE_URL = "http://206.162.244.141:6005/api/v1"; // e.g., "http://localhost:5000/api/v1"

// Predefined list of countries (all countries can be added here)
const COUNTRY_LIST = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
  "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// OPTIONAL: attach auth header if your backend requires it
function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

const SubCategoryPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateSubCategoryBody>({
    defaultValues: { name: "", country: "", categoryId: "" },
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  const [creating, setCreating] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  // Load categories once (no country filtering)
  useEffect(() => {
    let active = true;
    setCategoriesLoading(true);
    setCategoriesError(null);

    const params = new URLSearchParams();
    params.set("limit", "100");
    params.set("page", "1");

    fetch(`${API_BASE_URL}/category/categories?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...getAuthHeaders(),
      },
    })
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!active) return;

        if (!res.ok) throw new Error(json?.message || "Failed to load categories");

        // Backend may return { meta, data } or array directly
        const list: Category[] = Array.isArray(json) ? json : json?.data ?? [];
        setCategories(list);
      })
      .catch((err: any) => {
        if (!active) return;
        setCategoriesError(err?.message || "Failed to load categories");
      })
      .finally(() => {
        if (!active) return;
        setCategoriesLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const onSubmit = async (values: CreateSubCategoryBody) => {
    setServerMessage(null);
    setCreating(true);

    const payload: CreateSubCategoryBody = {
      name: values.name.trim(),
      country: values.country.trim(),
      categoryId: values.categoryId,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/subCategory/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.message || "Failed to create sub-category");

      setServerMessage("✅ Sub-category created successfully.");
      // Keep the country, clear name & category selection for fast subsequent adds
      reset({ name: "", country: values.country, categoryId: "" });
    } catch (e: any) {
      setServerMessage(e?.message || "Failed to create sub-category.");
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 sm:p-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-semibold">Create Sub-Category</h1>
          <p className="mt-1 text-sm text-gray-500">
            Provide a <em>name</em>, <em>country</em>, and select a <em>category</em>.
          </p>
        </div>

        {/* Server feedback */}
        {serverMessage && (
          <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm">
            {serverMessage}
          </div>
        )}
        {categoriesError && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {categoriesError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Sub-category Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g.. JSCE, PLE"
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
              {...register("name", { required: "Name is required", minLength: 2 })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Country (Dropdown selection with all countries) */}
          <div>
            <label htmlFor="country" className="mb-1.5 block text-sm font-medium">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
              {...register("country", { required: "Country is required" })}
            >
              <option value="">— Select a country —</option>
              {COUNTRY_LIST.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label htmlFor="categoryId" className="mb-1.5 block text-sm font-medium">
              Category <span className="text-red-500">*</span>
            </label>

            <select
              id="categoryId"
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
              disabled={categoriesLoading}
              {...register("categoryId", { required: "Category is required" })}
            >
              {categoriesLoading && <option>Loading categories…</option>}
              {!categoriesLoading && (
                <>
                  <option value="">— Select a category —</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </>
              )}
            </select>

            {errors.categoryId && (
              <p className="mt-1 text-sm text-red-600">{errors.categoryId.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={creating}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 font-medium text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {creating ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                    <path
                      d="M22 12a10 10 0 0 1-10 10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                  </svg>
                  Saving…
                </>
              ) : (
                "Create Sub-Category"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubCategoryPage;

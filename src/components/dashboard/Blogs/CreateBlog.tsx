// src/components/CreateBlog.tsx
"use client";
import { useCreateBlogMutation } from "@/redux/features/blogs/blogsApi";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [createBlog, { isLoading, error }] = useCreateBlogMutation();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createBlog({
        title,
        description,
        thumbnail,
      }).unwrap();
      // Redirect to blogs list on success
      router.push("/dashboard/blogs");
    } catch (err) {
      console.error("Failed to create blog:", err);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-5">
      <section className="relative rounded-xl bg-white p-4 sm:p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Create New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>
          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {error && <p className="text-red-500 text-sm">Error: {JSON.stringify(error)}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? "Creating..." : "Create Blog"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateBlog;


"use client";

import { useCreateBlogMutation } from "@/redux/features/blogs/blogsApi";
import { useRouter } from "next/navigation";
import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { Upload } from "lucide-react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [createBlog, { isLoading, error }] = useCreateBlogMutation();
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!thumbnail) {
      alert("Please select a thumbnail image.");
      return;
    }

    const textPayload = {
      "title": title,
      "description": description
    }

    const formData = new FormData();
    formData.append("text", JSON.stringify(textPayload));
    formData.append("file", thumbnail); // ✅ match backend key: "thumbnail"

    console.log(formData);

    try {
      await createBlog(formData).unwrap();
      router.push("/dashboard/blogs");
    } catch (err) {
      console.error("Failed to create blog:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Thumbnail</label>
              <div
                className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all"
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {thumbnailPreview ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      className="h-32 w-auto object-cover rounded-lg mb-3"
                    />
                    <p className="text-sm text-gray-500">Click or drag to change image</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-600 mb-3">Drag & drop image or click to choose file</p>
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600"
                    >
                      Choose a file
                    </button>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Body
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your blog content here..."
                required
              />
            </div>

            {/* Error Handling */}
            {error && (
              <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-sm text-red-700">
                  Error: {"data" in error ? JSON.stringify(error.data) : "Blog creation failed"}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-blue-500 text-white rounded-xl text-lg font-medium hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isLoading ? "Creating..." : "Create Blog"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

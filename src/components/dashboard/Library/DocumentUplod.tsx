/* eslint-disable @next/next/no-img-element */
"use client"
import { useCreateLibraryMutation } from "@/redux/features/library/libraryApi"
import type React from "react"

import { useRouter } from "next/navigation"
import { type FormEvent, useState, useRef, type ChangeEvent } from "react"
import { Upload } from "lucide-react"

const DocumentUpload = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("")
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [thumbnailPreview, setThumbnailPreview] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [createBlog, { isLoading, error }] = useCreateLibraryMutation()
  const router = useRouter()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setThumbnail(file)
      const previewUrl = URL.createObjectURL(file)
      setThumbnailPreview(previewUrl)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setThumbnail(file)
      const previewUrl = URL.createObjectURL(file)
      setThumbnailPreview(previewUrl)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!thumbnail) {
      alert("Please select a thumbnail image")
      return
    }


    const textPayload = {
      "title": title,
      "description": description
    }

    const formData = new FormData();
    formData.append("text", JSON.stringify(textPayload));
    formData.append("file", thumbnail); // ✅ match backend key: "thumbnail"

    try {
      await createBlog(formData).unwrap()

      // Reset the form
      setTitle("")
      setDescription("")
      setLink("")
      setThumbnail(null)
      setThumbnailPreview("")
      if (fileInputRef.current) fileInputRef.current.value = ""

      router.push("/dashboard/library")
    } catch (err) {
      console.error("Failed to create library:", err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Thumbnail Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Thumbnail</label>
              <div
                className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-200"
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {thumbnailPreview ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={thumbnailPreview || "/placeholder.svg"}
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
                    <p className="text-gray-600 mb-3">Drag & drop your image here or click choose a file</p>
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      Choose a file
                    </button>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
              </div>
            </div>

            {/* Title and Link Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Document Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Write the title here..."
                  required
                />
              </div>
              <div>
                <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
                  Link
                </label>
                <input
                  type="url"
                  id="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Post link here..."
                />
              </div>
            </div>

            {/* Description Field (Hidden in image but keeping for functionality) */}
            <div className="hidden">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                rows={4}
                placeholder="Write the description here..."
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">
                  Error: {"data" in error ? JSON.stringify(error.data) : "Failed to create document"}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-blue-500 text-white rounded-xl font-medium text-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "Posting..." : "Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DocumentUpload

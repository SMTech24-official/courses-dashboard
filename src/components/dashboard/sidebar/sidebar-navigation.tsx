"use client"

import type React from "react"
import { LayoutDashboard, Settings, LogOut, BookOpen, Library, GraduationCap } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Cookies from "js-cookie";
import { AppDispatch } from "@/redux/store"
import { ConfirmationModal } from "../confirmationModal/ConfirmationModal"
import { logOut } from "@/redux/ReduxFunction"

interface NavItem {
  label: string
  icon: React.ReactNode
  href: string
}

export default function SidebarNavigation() {

  const route = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()
  const dispatch = useDispatch<AppDispatch>()

  const handleLogOut = () => {
    dispatch(logOut())
    Cookies.remove("token")
    route.push("/login")
  }

  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      href: "/",
    },
    {
      label: "Blogs",
      icon: <BookOpen className="w-5 h-5" />,
      href: "/dashboard/blogs",
    },
    {
      label: "Library",
      icon: <Library className="w-5 h-5" />,
      href: "/dashboard/library",
    },
    {
      label: "Courses",
      icon: <GraduationCap className="w-5 h-5" />,
      href: "/dashboard/courses",
    },
    {
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
      href: "/settings",
    },
  ]

  return (

    <div className="w-full md:w-64 bg-white rounded-xl p-4 ml-5 mt-5 space-y-6 shadow-lg">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${pathname === item.href ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}

      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-gray-100 w-full">
        <LogOut className="w-5 h-5 text-red-500" />
        <span>Log Out</span>
      </button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogOut}
      />
    </div>
  )
}
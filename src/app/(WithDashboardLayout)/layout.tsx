import type React from "react"
import { Inter } from "next/font/google"
import SidebarNavigation from "@/components/dashboard/sidebar/sidebar-navigation"
import { ThemeProvider } from "next-themes"
import DashboardHeader from "@/components/dashboard/DashboardHeader"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dashboard App",
  description: "A simple dashboard application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="bg-[#EDF3FF] pt-4">
            <div>
              <DashboardHeader />
            </div>
            <div className="flex h-screen">
              <div className="w-64 border-r">
                <SidebarNavigation />
              </div>
              <main className="flex-1 overflow-auto px-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

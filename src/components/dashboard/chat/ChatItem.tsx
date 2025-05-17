"use client"

import Image from "next/image"
import {
  MessageSquare,
} from "lucide-react"

export default function ChatItem({
  name,
  message,
  time,
  date,
  active,
  isAnnouncement,
}: {
  name: string
  message: string
  time: string
  date: string
  active?: boolean
  isAnnouncement?: boolean
}) {

  return (
    <div className={`p-3 border-b flex gap-3 ${active ? "bg-blue-50" : ""}`}>
      <div className="flex-shrink-0">
        {isAnnouncement ? (
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
            <MessageSquare className="w-5 h-5" />
          </div>
        ) : (
          <Image src="/person1.png" alt={name} width={40} height={40} className="rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="font-medium text-sm truncate">{name}</div>
          <div className="text-xs text-gray-500 whitespace-nowrap">{date}</div>
        </div>
        <div className="text-xs text-gray-500 truncate">{message}</div>
        <div className="text-xs text-gray-500 mt-1">{time}</div>
      </div>
    </div>
  )
}

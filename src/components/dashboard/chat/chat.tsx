
import { Paperclip, Send } from "lucide-react"
import ChatItem from "./ChatItem"
import TabButton from "./TabButton"
import Image from "next/image"

const Chat = () => {
  return (
    <div className="rounded-lg mx-10">
      <div className="flex border-b rounded-lg p-10 m-5 shadow-lg bg-white">
        <TabButton active label="All"/>
        <TabButton label="Drivers" />
        <TabButton label="Hotels" />
      </div>
      <div className="flex-1 flex h-screen m-6 bg-white p-10 shadow-lg rounded-md">
        {/* Chat list */}
        <div className="w-80 border-r">
          {/* Tabs */}


          {/* Chat list */}
          <div className="overflow-auto h-[calc(100vh-180px)]">
            <ChatItem
              name="Broadcast messaging"
              message="Greetings from the kitchen! Today's special..."
              time="2:55 PM"
              date="1/13/2025"
              isAnnouncement
            />
            <ChatItem
              name="Brooklyn Simmons"
              message="Greetings from the kitchen! Today's special..."
              time="2:55 PM"
              date="1/13/2025"
              active
            />
            <ChatItem
              name="Darlene Robertson"
              message="Greetings from the kitchen! Today's special..."
              time="2:55 PM"
              date="1/13/2025"
            />
            <ChatItem
              name="Devon Lane"
              message="Konnichiwa! Today, we are featuring..."
              time="2:55 PM"
              date="1/13/2025"
            />
            <ChatItem
              name="Albert Flores"
              message="Buongiorno! Our menu showcases..."
              time="2:55 PM"
              date="1/13/2025"
            />
            <ChatItem
              name="Annette Black"
              message="Ni hao! Experience the taste of..."
              time="2:55 PM"
              date="1/13/2025"
            />
            <ChatItem
              name="Jane Cooper"
              message="Top of the morning to you! Indulge..."
              time="2:55 PM"
              date="1/13/2025"
            />
          </div>
        </div>

        {/* Active chat */}
        <div className="flex-1 flex flex-col  bg-[#EDF3FF]">
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <div className="flex items-center gap-3">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <div className="flex items-center gap-2 m-2">
                <Image
                  src="/person1.png"
                  alt="Brooklyn Simmons"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="font-medium">Brooklyn Simmons</div>
              </div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-green-50 text-green-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-auto">{/* Messages would go here */}</div>

          {/* Message input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <input type="text" placeholder="Message" className="flex-1 bg-transparent outline-none" />
              <button className="text-gray-500">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat

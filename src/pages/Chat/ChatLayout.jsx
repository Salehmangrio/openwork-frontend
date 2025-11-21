import React from "react";
import { Outlet } from "react-router-dom";
import ChatList from "./ChatList";

const ChatLayout = () => {
  
  return (
    <div className="h-screen w-full flex">

      {/* Chat Sidebar */}
      <div className="w-1/4 min-w-[250px]  bg-white rounded-2xl shadow-xl p-4 hidden md:flex flex-col">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">
          Chats
        </h2>
        <div className="flex-1 overflow-y-auto">
          <ChatList />
        </div>
      </div>

      {/* Main Outlet Area (ChatRoom gets shown here) */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl ml-0 md:ml-4 p-4 flex flex-col">
        <Outlet />
      </div>

    </div>
  );
};

export default ChatLayout;

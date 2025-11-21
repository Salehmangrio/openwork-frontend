import React, { useEffect } from "react";
import { Search, MessageCircle } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRole } from "../../store/slices/chatSlice"; // adjust path

const ChatList = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // Determine role from pathname
  const role = location.pathname.startsWith("/freelancer") ? "freelancer" : "client";
  useEffect(() => {
    dispatch(setRole(role));
  }, [dispatch, role]);

  // Get chats from Redux store
  const chats = useSelector((state) =>
    role === "freelancer" ? state.chat.freelancerChats : state.chat.clientChats
  );

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <MessageCircle className="text-indigo-600" size={26} />
      </div>

      {/* Search Bar */}
      <div className="relative mb-5">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full px-4 py-2 pl-10 border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition-all"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      {/* Chat List */}
      <div className="space-y-4 overflow-y-auto h-[calc(100%-120px)] pr-1">
        {chats.length === 0 ? (
          <p className="text-gray-500">No chats available.</p>
        ) : (
          chats.map((chat) => (
            <NavLink key={chat.id} to={`${chat.id}`} state={{ chat }}>
              <div className="flex items-center my-2 bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-lg">
                    {chat.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Chat Info */}
                <div className="flex-1 px-2">
                  <h2 className="text-gray-900 font-semibold">{chat.name}</h2>
                  <p className="text-sm text-gray-500 truncate">{chat.message}</p>
                </div>

                {/* Time */}
                <span className="text-xs text-gray-400 whitespace-nowrap">{chat.time}</span>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatList;

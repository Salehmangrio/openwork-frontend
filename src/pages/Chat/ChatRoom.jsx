import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../store/slices/chatSlice"; // adjust path

const ChatRoom = () => {
  const { id } = useParams(); // get chat id from URL
  const dispatch = useDispatch();

  // Get current role and chats from Redux
  const role = useSelector((state) => state.chat.role);
  const chats = useSelector((state) =>
    role === "freelancer" ? state.chat.freelancerChats : state.chat.clientChats
  );

  // Find the chat by ID
  const chat = chats.find((c) => c.id === parseInt(id));

  // Local state for input
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Initialize messages from store
  useEffect(() => {
    if (chat) {
      setMessages(chat.messages);
    }
  }, [chat]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      text: message,
      sender: role === "freelancer" ? "freelancer" : "client",
    };

    // Update local state
    setMessages([...messages, newMsg]);

    // Update Redux store
    dispatch(addMessage({ chatId: chat.id, message: newMsg }));

    setMessage("");
  };

  if (!chat) return <p className="p-4 text-gray-500">Chat not found.</p>;

  return (
    <div className="flex flex-col h-full w-full border-1 p-6 rounded-xl shadow-xl">

      {/* Chat Header */}
      <div className="backdrop-blur-md p-4 rounded-xl shadow-lg bg-gray-200 mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{chat.name}</h2>
        <span className="text-sm opacity-80">Online</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-100 rounded-xl p-4 shadow-inner space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 max-w-xs rounded-xl text-sm shadow 
            ${msg.sender === role
                ? "bg-indigo-600 text-white ml-auto"
                : msg.sender === "system"
                  ? "bg-gray-200 text-gray-700 mx-auto text-center"
                  : "bg-white text-gray-700 mr-auto"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="mt-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none shadow"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-5 py-2 bg-white rounded-xl text-indigo-600 font-semibold shadow hover:shadow-lg transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;

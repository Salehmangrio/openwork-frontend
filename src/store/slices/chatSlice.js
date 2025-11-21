import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clientChats: [
    {
      id: 1,
      name: "Freelancer A",
      message: "Hello, I finished the task.",
      time: "2m ago",
      clientId: 1,
      freelancerId: 101,
      messages: [
        { id: 1, text: "Welcome to the chat!", sender: "system", clientId: 1, freelancerId: 101 },
        { id: 2, text: "Hi! I have submitted the first draft.", sender: "freelancer", clientId: 1, freelancerId: 101 },
        { id: 3, text: "Great! I will review it now.", sender: "client", clientId: 1, freelancerId: 101 },
        { id: 4, text: "Thanks, please let me know your feedback.", sender: "freelancer", clientId: 1, freelancerId: 101 },
        { id: 5, text: "Looks good, approved.", sender: "client", clientId: 1, freelancerId: 101 },
      ],
    },
    {
      id: 2,
      name: "Freelancer B",
      message: "Can we discuss the new project?",
      time: "10m ago",
      clientId: 1,
      freelancerId: 102,
      messages: [
        { id: 1, text: "Welcome to the chat!", sender: "system", clientId: 1, freelancerId: 102 },
        { id: 2, text: "Sure, let's schedule a meeting.", sender: "freelancer", clientId: 1, freelancerId: 102 },
        { id: 3, text: "I am available tomorrow at 3 PM.", sender: "client", clientId: 1, freelancerId: 102 },
        { id: 4, text: "Perfect, let's confirm then.", sender: "freelancer", clientId: 1, freelancerId: 102 },
        { id: 5, text: "Confirmed. See you then.", sender: "client", clientId: 1, freelancerId: 102 },
      ],
    },
    {
      id: 3,
      name: "Freelancer C",
      message: "Please check the updated designs.",
      time: "1h ago",
      clientId: 1,
      freelancerId: 103,
      messages: [
        { id: 1, text: "Welcome to the chat!", sender: "system", clientId: 1, freelancerId: 103 },
        { id: 2, text: "I've uploaded the latest design files.", sender: "freelancer", clientId: 1, freelancerId: 103 },
        { id: 3, text: "Looks good! I will give feedback by EOD.", sender: "client", clientId: 1, freelancerId: 103 },
        { id: 4, text: "Thanks for the feedback!", sender: "freelancer", clientId: 1, freelancerId: 103 },
        { id: 5, text: "You're welcome. Keep it up!", sender: "client", clientId: 1, freelancerId: 103 },
      ],
    },
  ],

  freelancerChats: [
    {
      id: 1,
      name: "Client X",
      message: "Please update the files.",
      time: "15m ago",
      clientId: 201,
      freelancerId: 1,
      messages: [
        { id: 1, text: "Welcome to the chat!", sender: "system", clientId: 201, freelancerId: 1 },
        { id: 2, text: "I have updated the documents as requested.", sender: "freelancer", clientId: 201, freelancerId: 1 },
        { id: 3, text: "Perfect! Thanks for the quick update.", sender: "client", clientId: 201, freelancerId: 1 },
        { id: 4, text: "No problem! Let me know if anything else is needed.", sender: "freelancer", clientId: 201, freelancerId: 1 },
        { id: 5, text: "Will do. Appreciate your help.", sender: "client", clientId: 201, freelancerId: 1 },
      ],
    },
    {
      id: 2,
      name: "Client Y",
      message: "We need the project report by today.",
      time: "30m ago",
      clientId: 202,
      freelancerId: 1,
      messages: [
        { id: 1, text: "Welcome to the chat!", sender: "system", clientId: 202, freelancerId: 1 },
        { id: 2, text: "I will send it within the next 2 hours.", sender: "freelancer", clientId: 202, freelancerId: 1 },
        { id: 3, text: "Great, looking forward to it.", sender: "client", clientId: 202, freelancerId: 1 },
        { id: 4, text: "Sent! Please confirm.", sender: "freelancer", clientId: 202, freelancerId: 1 },
        { id: 5, text: "Received, thanks!", sender: "client", clientId: 202, freelancerId: 1 },
      ],
    },
    {
      id: 3,
      name: "Client Z",
      message: "Can you join the call?",
      time: "1h ago",
      clientId: 203,
      freelancerId: 1,
      messages: [
        { id: 1, text: "Welcome to the chat!", sender: "system", clientId: 203, freelancerId: 1 },
        { id: 2, text: "Yes, I am ready for the call.", sender: "freelancer", clientId: 203, freelancerId: 1 },
        { id: 3, text: "Perfect, let's start in 5 mins.", sender: "client", clientId: 203, freelancerId: 1 },
        { id: 4, text: "Joined the call.", sender: "freelancer", clientId: 203, freelancerId: 1 },
        { id: 5, text: "Thanks for joining, let's discuss.", sender: "client", clientId: 203, freelancerId: 1 },
      ],
    },
  ],

  currentChat: null,
  role: "client",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      const chats = state.role === "freelancer" ? state.freelancerChats : state.clientChats;

      const chat = chats.find((c) => c.id === chatId);
      if (chat) {
        const newId = chat.messages.length ? chat.messages[chat.messages.length - 1].id + 1 : 1;

        chat.messages.push({
          id: newId,
          ...message,
          clientId: chat.clientId,
          freelancerId: chat.freelancerId,
        });

        chat.message = message.text;
        chat.time = "just now";
      }
    },
  },
});

export const { setRole, setCurrentChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;

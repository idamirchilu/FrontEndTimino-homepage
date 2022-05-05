import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { messages: [], username: "" },
  reducers: {
    setUserName(state, { payload }) {
      state.username = payload;
    },
    fetchMessages(state, { payload }) {
      state.messages = payload;
    },
    sendMessage(state, { payload }) {
      const newMessage = state.messages.find(
        (item) => item.username === state.username
      );
      newMessage.chat_messages_id = Math.random() + newMessage.chat_messages_id;
      newMessage.message = payload;
      newMessage.created_at = new Date().toISOString();
      state.messages.push(newMessage);
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice;

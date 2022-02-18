import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, selectMail } =
  counterSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default counterSlice.reducer;

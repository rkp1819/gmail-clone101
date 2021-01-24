import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },

  //set the value
  reducers: {
    OpenSendMessage: (state) => {
      state.sendMessageIsOpen = true;
      console.log(state.sendMessageIsOpen);
    },

    CloseSendMessage: (state) => {
      state.sendMessageIsOpen = false;
      console.log(state.sendMessageIsOpen);
    },
  },
});

export const { OpenSendMessage, CloseSendMessage } = mailSlice.actions;

//get the value
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;

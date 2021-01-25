import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    mailData: {},
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

    SetMailData: (state, action) => {
      console.log(action.payload, state);
      return { mailData: action.payload };
    },
  },
});

export const {
  OpenSendMessage,
  CloseSendMessage,
  SetMailData,
} = mailSlice.actions;

//get the value
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectMailData = (state) => state.mail.mailData;

export default mailSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalDisplay: false,
    additionalPayload : {
    },
  },
  reducers: {
    displayModal(state, action) {
      state.modalDisplay = true;
      state.additionalPayload = action.payload;
    },
    hideModal(state) {
      state.modalDisplay = false;
    },
  },
});

export const modalSliceActions = modalSlice.actions;

export default modalSlice;

import { createSlice } from "@reduxjs/toolkit";

const importantAnnoucmentSlice = createSlice({
  name: "importantAnnouncment",
  initialState: {
    announcements: [],
    loading: false,
    error: false,
  },
  reducers: {
    setAnnouncments(state, action) {
      state.announcements = action.payload;
    },
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
    setErrorTrue(state) {
      state.error = true;
    },
    setErrorFalse(state) {
      state.error = false;
    },
  },
});

export const importantAnnouncmentActions = importantAnnoucmentSlice.actions;

export default importantAnnoucmentSlice;

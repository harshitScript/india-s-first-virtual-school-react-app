import { createSlice } from "@reduxjs/toolkit";

const importantLinksSlice = createSlice({
  name: "importantLinks",
  initialState: {
    importantLinks: [],
    loading: false,
    error: false,
  },
  reducers: {
    setImportantLinks(state, action) {
      state.importantLinks = action.payload;
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

export const importantLinksSliceActions = importantLinksSlice.actions;

export default importantLinksSlice;

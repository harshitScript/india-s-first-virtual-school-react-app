import { createSlice } from "@reduxjs/toolkit";

const helpDocsSlice = createSlice({
  name: "helpDocs",
  initialState: {
    helpDocsList: [],
    loading: false,
    error: false,
  },
  reducers: {
    setHelpDocs(state, action) {
      state.helpDocsList = action.payload;
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

export const helpDocsSliceActions = helpDocsSlice.actions;

export default helpDocsSlice;

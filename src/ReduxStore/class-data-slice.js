import { createSlice } from "@reduxjs/toolkit";
const classDataSlice = createSlice({
  name: "classData",
  initialState: {
    dataIsPresent: false,
    primaryClassData: [],
    middleClassData: [],
    secondaryClassData: [],
    seniorSecondaryClassData: [],
    loading: false,
    error: false,
  },
  reducers: {
    setDataIsPresent(state) {
      state.dataIsPresent = true;
    },
    setPrimaryClassData(state, action) {
      state.primaryClassData = action.payload;
    },
    setMiddleClassData(state, action) {
      state.middleClassData = action.payload;
    },
    setSecondaryClassData(state, action) {
      state.secondaryClassData = action.payload;
    },
    setSeniorSecondaryClassData(state, action) {
      state.seniorSecondaryClassData = action.payload;
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

export const classDataSliceActions = classDataSlice.actions;

export default classDataSlice;

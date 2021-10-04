import { configureStore } from "@reduxjs/toolkit";
import importantAnnoucmentSlice from "./important-announcement-slice";
import classDataSlice from "./class-data-slice";
import helpDocsSlice from "./help-docs-slice";
import aboutUsSlice from "./about-us-slice";
import userDataObjectSlice from "./user-data-object-slice";
import modalSlice from "./modal-slice";
import importantLinksSlice from "./important-links-slice";
import profilePictureSlice from "./profile-picture-slice";

const store = configureStore({
  reducer: {
    classData: classDataSlice.reducer,
    importantAnnouncements: importantAnnoucmentSlice.reducer,
    helpDocs: helpDocsSlice.reducer,
    aboutUs: aboutUsSlice.reducer,
    userData: userDataObjectSlice.reducer,
    modal: modalSlice.reducer,
    importantLinks: importantLinksSlice.reducer,
    profilePicture: profilePictureSlice.reducer,
  },
});

export default store;

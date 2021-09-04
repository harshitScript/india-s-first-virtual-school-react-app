import { createSlice } from "@reduxjs/toolkit";

const aboutUsSlice = createSlice({
  name: "aboutus",
  initialState: {
    aboutUsData: [
      {
        header: "About IFVS",
        desc: "IFVS is a idea proposed by seeing the effect of pandemic on education and also the growing demand of online education . In this world of pay-per-view prototype we are here with a completelly free webpage to boost your learning in a efficient manner. IFVS offers courses from primary level classes to higher secondary classes in plane and oraganised manner designed for easy and fun learning of school going kids.",
      },
      {
        header: "About Online Education",
        desc: "Nowadays, it becomes easy for students to learn the bulk of things, it’s all thanks to the internet. While students face an obstacle in traditional education, then online classes will help them to learn something new and gain knowledge. Even the students from the boarding schools are able to take this benefit. E-learning is the effective way for students to study. Online learning has many advantages that help students to learn. Online education has seen rapid progress in recent times. Online classes will can students when they are unable to go to take face to face classes. Through online classes, students can get the same quality of education sitting in their homes. Education may have numerous purposes, and online classes help to fulfil them. Online education can be a recognized education as it offers new opportunities for traditional learning. Online classes are convenient and flexible.",
      },
    ],
  },
});

export default aboutUsSlice;

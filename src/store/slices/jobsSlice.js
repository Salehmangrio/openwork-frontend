// store/jobsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendedJobs: [
    {
      id: 1,
      title: "Full Stack Developer Needed for SaaS Platform",
      description: "We're looking for an experienced full-stack developer to help build our new SaaS platform. Must have experience with React, Node.js, and PostgreSQL.",
      skills: ["React", "Node.js", "PostgreSQL"],
      posted: "2 hours ago",
      location: "Remote",
      salary: "$5,000 - $8,000",
    },
    {
      id: 2,
      clientId:12,
      clientName:"Tech Solutions Ltd.",
      title: "Frontend Developer for E-Commerce App",
      description: "Need a frontend developer with React and TailwindCSS experience to build modern e-commerce features.",
      skills: ["React", "TailwindCSS", "JavaScript"],
      posted: "5 hours ago",
      location: "Remote",
      salary: "$3,000 - $5,000",
    },
    {
      id: 3,
      title: "Backend Developer for Node.js API",
      description: "Looking for a backend developer to design REST APIs using Node.js and Express with MongoDB integration.",
      skills: ["Node.js", "Express", "MongoDB"],
      posted: "1 day ago",
      location: "On-site",
      salary: "$4,000 - $6,000",
    },
  ],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.recommendedJobs.push(action.payload);
    },
    updateJob: (state, action) => {
      const { id, updatedJob } = action.payload;
      const index = state.recommendedJobs.findIndex(job => job.id === id);
      if (index !== -1) {
        state.recommendedJobs[index] = { ...state.recommendedJobs[index], ...updatedJob };
      }
    },
    removeJob: (state, action) => {
      const id = action.payload;
      state.recommendedJobs = state.recommendedJobs.filter(job => job.id !== id);
    },
  },
});

export const { addJob, updateJob, removeJob } = jobsSlice.actions;
export default jobsSlice.reducer;

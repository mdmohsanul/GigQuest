import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk("/jobs", async () => {
  try {
    const response = await axios.get(
      "https://gig-quest-backend.vercel.app/jobs"
    );
    return response.data.data;
  } catch (error) {
    console.log("error fetching jobs ", error);
  }
});

export const deleteJob = createAsyncThunk("/job/delete", async (jobId) => {
  try {
    const response = await axios.delete(
      `https://gig-quest-backend.vercel.app/jobs/${jobId}`
    );
    return jobId;
  } catch (error) {
    console.log("error deleting job ", error);
  }
});
export const addJob = createAsyncThunk("/job/addJob", async (jobDetails) => {
  try {
    const response = await axios.post(
      `https://gig-quest-backend.vercel.app/jobs/`,
      jobDetails
    );

    return response.data.job;
  } catch (error) {
    console.log("error deleting job ", error);
  }
});
const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    status: "idle",
    error: null,
    searchFilter: "",
  },
  reducers: {
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchJobs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "success";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.error = action.error.message;
      }),
      builders.addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((item) => item._id !== action.payload);
      }),
      builders.addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      });
  },
});
export const { setSearchFilter } = jobSlice.actions;
export default jobSlice.reducer;

import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { useEffect } from "react";
import JobListing from "./pages/JobListing";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { fetchJobs } from "./feature/jobSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <JobListing />,
      },
      {
        path: "/jobDetails/:jobId",
        element: <JobDetails />,
      },
      {
        path: "/postJob",
        element: <PostJob />,
      },
    ],
  },
]);
export default appRouter;

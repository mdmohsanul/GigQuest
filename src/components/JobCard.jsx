import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteJob } from "../feature/jobSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = (jobId) => {
    dispatch(deleteJob(jobId));
    toast.error("Job deleted successfully!");
  };
  return (
    <>
      <div className="p-5 w-80 border border-gray-300 rounded-md">
        <ToastContainer />
        <div className="flex flex-col gap-4 pb-4">
          <h1 className="text-xl font-medium">{job?.jobTitle}</h1>
          <p className="truncate">
            <span className="font-medium ">Company Name: </span>{" "}
            {job?.companyName}
          </p>
          <p>
            <span className="font-medium">Location: </span>
            {job?.location}
          </p>
          <p>
            <span className="font-medium">Job Type: </span>
            {job?.jobType}
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-3">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-md py-2 w-full md:w-2/4"
            onClick={() => navigate(`/jobDetails/${job._id}`)}
          >
            See Details
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white cursor-pointer rounded-md py-2 w-full md:w-2/4"
            onClick={() => deleteHandler(job._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default JobCard;

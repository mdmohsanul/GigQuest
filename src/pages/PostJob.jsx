import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "../feature/jobSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const PostJob = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.navbar);

  const [jobDetails, setJobDetails] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "",
    jobDescription: "",
    requiredQualifications: "",
  });
  const [error, setError] = useState("");
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: name === "salary" ? parseInt(value) : value,
    }));
  };
  const validateForm = () => {
    if (
      !jobDetails.jobTitle ||
      !jobDetails.companyName ||
      !jobDetails.location ||
      !jobDetails.jobType ||
      !jobDetails.jobDescription ||
      !jobDetails.requiredQualifications ||
      !jobDetails.salary
    ) {
      setError("All Fields are required");
      return false;
    }
    setError("");
    return true;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    dispatch(addJob(jobDetails));
    toast.success("Job added!");
    setJobDetails((prev) => ({
      ...prev,
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      jobDescription: "",
      requiredQualifications: "",
      salary: "",
    }));
  };
  return (
    <>
      <motion.div
        style={{ marginTop: isOpen ? "160px" : "0px" }}
        // animate={{ marginTop: isOpen ? 120 : 0 }}
        transition={{ duration: 0.9, ease: "easeInOut", times: [0, 0.5, 1] }}
        className="p-6 mt-[64px]"
      >
        <div className="max-w-6xl min-h-screen mx-auto pt-14">
          <h1 className="text-3xl font-medium pb-4 px-5 md:px-0">Post a Job</h1>
          <ToastContainer />
          <form onSubmit={submitHandler} className="px-5 md:px-0">
            <div>
              <label htmlFor="jobTitle" className="">
                Job Title:{" "}
              </label>
              <input
                type="text"
                name="jobTitle"
                required
                placeholder="Software Engineer"
                value={jobDetails.jobTitle}
                onChange={changeHandler}
                className="w-full rounded-md border border-gray-300 py-2 px-3 my-2"
              />
            </div>
            <div>
              <label htmlFor="companyName" className="">
                Company Name:{" "}
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={jobDetails.companyName}
                onChange={changeHandler}
                placeholder="Tecno Pvt. Ltd."
                className="w-full rounded-md border border-gray-300 py-2 px-3 my-2"
              />
            </div>
            <div>
              <label htmlFor="salary" className="">
                Salary:{" "}
              </label>
              <input
                type="number"
                name="salary"
                required
                value={jobDetails.salary}
                onChange={changeHandler}
                placeholder="$10000"
                className="w-full rounded-md border border-gray-300 py-2 px-3 my-2"
              />
            </div>
            <div>
              <label htmlFor="location" className="">
                Location:{" "}
              </label>
              <input
                type="text"
                name="location"
                required
                value={jobDetails.location}
                onChange={changeHandler}
                placeholder="Banglore"
                className="w-full rounded-md border border-gray-300 py-2 px-3 my-2"
              />
            </div>
            <div>
              <label htmlFor="jobType" className="">
                Job Type:{" "}
              </label>
              <select
                name="jobType"
                className="w-full rounded-md border border-gray-300 py-2 px-3 my-2"
                value={jobDetails.jobType}
                onChange={changeHandler}
              >
                <option value="Full-time (On-site)">Full-time (On-site)</option>
                <option value="Part-time (On-site)">Part-time (On-site)</option>
                <option value="Full-time (Remote)">Full-time (Remote)</option>
                <option value="Part-time (Remote)">Part-time (Remote)</option>
              </select>
            </div>
            <div>
              <label htmlFor="jobDescription" className="">
                Job Description:{" "}
              </label>
              <textarea
                name="jobDescription"
                value={jobDetails.jobDescription}
                onChange={changeHandler}
                cols="30"
                className="w-full rounded-md border border-gray-300 py-2 px-3 my-2"
              ></textarea>
            </div>
            <div>
              <label htmlFor="requiredQualifications" className="">
                Job Qualifications:{" "}
              </label>
              <textarea
                name="requiredQualifications"
                cols="30"
                value={jobDetails.requiredQualifications}
                onChange={changeHandler}
                className="w-full rounded-md border border-gray-300 py-2 px-3 my-2"
              ></textarea>
            </div>
            <p className="py-2 text-red-600">{error}</p>
            <button className="rounded-md py-3 bg-blue-600 text-white px-5 mb-9">
              Post Job
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default PostJob;

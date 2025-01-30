import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const JobDetails = () => {
  const { jobId } = useParams();
  const { jobs } = useSelector((state) => state.jobs);
  const { isOpen } = useSelector((state) => state.navbar);

  const findJob = jobs.find((item) => item._id === jobId);

  return (
    <>
      <motion.div
        style={{ marginTop: isOpen ? "160px" : "0px" }}
        // animate={{ marginTop: isOpen ? 120 : 0 }}
        transition={{ duration: 0.9, ease: "easeInOut", times: [0, 0.5, 1] }}
        className="p-6 mt-[64px]"
      >
        <div className="max-w-6xl min-h-screen pt-10 mx-auto">
          <h1 className="text-3xl font-medium  py-4  mx-5">
            {findJob?.jobTitle}
          </h1>
          <div className="p-5 border mx-5 border-gray-300 rounded-md flex flex-col gap-4">
            <p>
              <span className="font-medium">Company Name: </span>{" "}
              {findJob?.companyName}
            </p>
            <p>
              <span className="font-medium">Location: </span>
              {findJob?.location}
            </p>
            <p>
              <span className="font-medium">Salary: </span>
              {findJob?.salary}
            </p>
            <p>
              <span className="font-medium">Job Type: </span>
              {findJob?.jobType}
            </p>
            <p>
              <span className="font-medium">Job Description: </span>
              {findJob?.jobDescription}
            </p>
            <p>
              <span className="font-medium">Qualifications: </span>
              <ol type="1">
                {findJob?.requiredQualifications.split(",").map((item, i) => (
                  <li key={i}>
                    <span className="">{i + 1}. </span> {item}
                  </li>
                ))}
              </ol>
            </p>{" "}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default JobDetails;

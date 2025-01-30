import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const { jobs } = useSelector((state) => state.jobs);
  const findJob = jobs.find((item) => item._id === jobId);
  console.log(jobId);
  console.log(findJob);

  return (
    <>
      <div className="max-w-6xl min-h-screen pt-20 mx-auto">
        <h1 className="text-2xl font-medium py-4">{findJob?.jobTitle}</h1>
        <div className="p-5 border border-gray-300 rounded-md flex flex-col gap-4">
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
                <li key={i}>{item}</li>
              ))}
            </ol>
          </p>{" "}
        </div>
      </div>
    </>
  );
};

export default JobDetails;

import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import { motion } from "framer-motion";
import ShimmerProductCard from "../components/Shimmer/ShimmerProductCard";
import ShimerUI_ProductsPage from "../components/Shimmer/ShimerUI_ProductsPage";

const JobListing = () => {
  const { isOpen } = useSelector((state) => state.navbar);
  const { jobs, searchFilter, status, error } = useSelector(
    (state) => state.jobs
  );

  const filteredList =
    searchFilter === ""
      ? jobs
      : jobs?.filter((job) =>
          job.jobTitle.toLowerCase().includes(searchFilter.toLowerCase())
        );
  return (
    <>
      {status === "loading" && <ShimerUI_ProductsPage />}
      {error && <p>{error}</p>}
      {/* Body Content (pushed down when menu opens) */}
      {status === "success" && (
        <motion.div
          style={{ marginTop: isOpen ? "160px" : "0px" }}
          // animate={{ marginTop: isOpen ? 120 : 0 }}
          transition={{ duration: 0.9, ease: "easeInOut", times: [0, 0.5, 1] }}
          className="p-6 mt-[64px]"
        >
          <div className="max-w-6xl mx-auto min-h-screen pt-14">
            <h1 className="text-3xl font-medium mx-12 md:mx-8">All Jobs</h1>
            <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center">
              {filteredList?.map((item) => (
                <JobCard job={item} key={item._id} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default JobListing;

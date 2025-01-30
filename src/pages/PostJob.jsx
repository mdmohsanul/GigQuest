import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import JobForm from "../components/JobForm";

const PostJob = () => {
  const { isOpen } = useSelector((state) => state.navbar);
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

          <JobForm />
        </div>
      </motion.div>
    </>
  );
};

export default PostJob;

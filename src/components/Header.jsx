import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearchFilter } from "../feature/jobSlice";
import { FaBars, FaTimes } from "react-icons/fa";
import { toggleMenu } from "../feature/navbarSlice";
import { motion } from "framer-motion";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.navbar);
  const [nav, setNav] = useState(false);
  const handleInputChange = (value) => {
    navigate("/");
    setSearchTerm(value);
  };

  useEffect(() => {
    dispatch(setSearchFilter(searchTerm));
  }, [searchTerm]);
  return (
    <>
      <div className="w-full bg-blue-600 text-white h-16 fixed top-0">
        <div className="max-w-6xl mx-auto  ">
          <div className="flex items-center justify-between md:justify-start py-3 gap-11 px-5 md:px-0">
            <Link to="/">
              {" "}
              <h1 className="text-2xl font-medium">Gig Quest</h1>
            </Link>
            <button
              onClick={() => dispatch(toggleMenu())}
              className="md:hidden "
            >
              {isOpen ? (
                <FaTimes size={30} className="text-slate-700" />
              ) : (
                <FaBars size={30} className="text-slate-700" />
              )}
            </button>
            <div className="hidden md:flex items-center gap-11">
              <Link to="/">Job Postings</Link>
              <Link to="/postJob">Post a Job</Link>

              <div className="hidden md:flex relative ">
                <div className="absolute end-0 inset-y-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="text-white  font-bold" size={20} />
                </div>
                <input
                  type="text"
                  name=""
                  value={searchTerm}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder={`Search by job title`}
                  className="py-2 pr-4 w-64  hover:outline-none outline-none text-white  border-b border-white"
                />
              </div>
            </div>

            {/* Mobile View */}

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isOpen ? "120px" : 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
              className="bg-blue-600 text-white overflow-hidden fixed top-[56px] left-0 w-full z-40 md:hidden"
            >
              <ul className="flex flex-col items-center space-y-3 py-4">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Jobs</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { IoIosSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

const Education = () => {
  return (
    <div className=" p-8 rounded-lg text-white grid items-center justify-center">
      <h1 className=" mb-8 text-black md:text-5xl text-4xl text-heading font-bold">Education</h1>
      <div className="relative border-l-2 border-blue-600 pl-8 space-y-12">
        {/* B.Tech, Computer Science */}
        <div className="relative flex items-start">
          <div className="absolute left-[-30px] top-0 flex items-center justify-center w-6 h-6 bg-red-500 rounded-full">
            {" "}
            <IoIosSchool />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-84">
            <h3 className="text-lg font-semibold">BCA ( Bachelor of Computer Applications )</h3>
            <p className="text-blue-400">BHAGWANT GLOBAL UNIVERSITY, UTTARAKHAND</p>
            <p className="text-gray-300">CGPA - 7.5</p>
            <p className="text-gray-400 mt-2">Jun 2022 - Jun 2025</p>
          </div>
        </div>

        {/* Inter School */}
        <div className="relative flex items-start">
          <div className="absolute left-[-30px] top-0 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
            {" "}
            <BiSolidSchool />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-85">
            <h3 className="text-lg font-semibold"> Intermediate examination - 2021</h3>
            <p className="text-blue-400">GOVERNMENT INTER COLLEGE ,  JHANDICHAUR</p>
            <p className="text-gray-300">Marks - 76%</p>
            <p className="text-gray-400 mt-2">Jun 2021</p>
          </div>
        </div>
        {/* High School */}
        <div className="relative flex items-start">
          <div className="absolute left-[-30px] top-0 flex items-center justify-center w-6 h-6 bg-yellow-600 rounded-full">
            {" "}
            <FaSchool />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md w-85">
            <h3 className="text-lg font-semibold">High School examination - 2019</h3>
            <p className="text-blue-400">GOVERNMENT INTER COLLEGE ,  JHANDICHAUR</p>
            <p className="text-gray-300">Marks - 70%</p>
            <p className="text-gray-400 mt-2">jun 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

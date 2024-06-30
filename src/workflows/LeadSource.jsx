import React from "react";
import { FiUserPlus } from "react-icons/fi";

const LeadSource = ({ leadSource = "data" }) => {
  return (
    <div className="text-xl bg-white border-2 border-gray-200  w-[20rem] h-[7rem] rounded-lg flex items-center justify-start gap-4 p-5">
      <div className="bg-pink-200 text-pink-600 h-full w-[6rem] rounded-lg flex items-center justify-center">
        <FiUserPlus size={30} />
      </div>
      <div>
        <p className=" mb-2  text-black text-xl">Lead Source</p>
        <p className="text-pink-700">{leadSource}</p>
      </div>
    </div>
  );
};

export default LeadSource;

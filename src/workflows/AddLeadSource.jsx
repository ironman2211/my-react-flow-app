import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Handle, Position } from "reactflow";

const AddLeadSource = ({ data: { text, description } }) => {
  return (
    <div className="h-[8rem] w-[20rem] bg-white flex flex-col items-center justify-center text-base border-2 rounded-md border-gray-40 gap-1">
      <FaPlus size={20} />
      <h1 className="font-bold">{text}</h1>
      <p>{description}</p>
      <Handle type="source" position={Position.Top}/>
      <Handle type="target" position={Position.Bottom}/>
    </div>
  );
};

export default AddLeadSource;

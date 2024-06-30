import React from "react";
import { FaPlus } from "react-icons/fa";
import { Handle, Position } from "reactflow";

const AddBlock = () => {
  return (
    <div className="p-5 border-2 border-gray-300 rounded-lg bg-white">
      <FaPlus />
      <Handle type="target" position={Position.Top} />
      {/* <Handle type="source" position={Position.Bottom} /> */}
    </div>
  );
};

export default AddBlock;

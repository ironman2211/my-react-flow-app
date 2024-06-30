import React from "react";
import { Position,Handle } from "reactflow";

const SequenceStart = () => {
  return (
    <div className="w-[10rem] h-[4rem] bg-white border-gray-600 border-2 rounded-lg text-center flex justify-center items-center">
      <p className="text-black">Sequence Start</p>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default SequenceStart;

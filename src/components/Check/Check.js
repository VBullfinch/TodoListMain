import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({ isCompleted }) => {
  return (
    <div
      className={`mr-3 border-2 rounded-lg border-pink-400 ${
        isCompleted ? "bg-pink-400" : ""
      } w-5 h-5 flex items-center justify-center`}
    >
      {isCompleted && <BsCheck size={24} className="text-gray-900" />}
    </div>
  );
};

export { Check };

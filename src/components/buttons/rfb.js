// rfb: rounded flat button
import React from "react";

const Rfb = (props) => {
  const { title, color, textColor, rightBorder } = props;
  return (
    <button
      className={`p-2 w-24 hover:bg-gray-700 text-white hover:text-white  rounded-l-none ${rightBorder} ${color} ${textColor}`}
    >
      {title}
    </button>
  );
};

export default Rfb;

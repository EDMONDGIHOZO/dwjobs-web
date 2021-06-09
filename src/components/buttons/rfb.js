// rfb: rounded flat button

import React from "react";

const Rfb = (props) => {
  const { title, color, textColor, rightborder } = props;
  return (
    <button
      className={`p-2 w-36 h-12 text-white font-bold mr-2 rounded-l-none ${rightborder} ${color} ${textColor}`}
    >
      {title}
    </button>
  );
};

export default Rfb;

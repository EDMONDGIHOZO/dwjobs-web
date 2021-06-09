// rfb: rounded flat button

import React from "react";

const Rfb = (props) => {
  const { title, color, textColor } = props;
  return (
    <button
      className={`p-2 w-36 h-12 text-white font-bold mx-2 rounded-md bg-${color} text-${textColor}`}
    >
      {title}
    </button>
  );
};

export default Rfb;

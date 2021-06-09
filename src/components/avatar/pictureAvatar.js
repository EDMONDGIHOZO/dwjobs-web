import React from "react";

const Pavatar = ({ number }) => {
  return (
    <div className="flex relative w-6 h-6 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white">
      <img
        class="rounded-full"
        alt="A"
        src={`https://randomuser.me/api/portraits/women/${number}.jpg`}
      />
    </div>
  );
};

export default Pavatar;

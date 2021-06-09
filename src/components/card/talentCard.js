import React from "react";
import Pavatar from "../avatar/pictureAvatar";

const TalentCard = (props) => {
  const { title, description } = props;

  return (
    <div className="py-2 md:p-0 max-h-72">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
          <div className="flex item-center mt-2 px-5">
            {/* avatar */}
            <Pavatar number={"60"} />
            <Pavatar number={"45"} />
            <Pavatar number={"30"} />
            <Pavatar number={"31"} />
            <Pavatar number={"43"} />
            {/* end of avatar */}
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-regular text-sm py-2">
              60 Ready
            </h1>
            <button className="p-3 bg-primary text-white text-xs font-bold uppercase hover:bg-secondary">
              View designers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;

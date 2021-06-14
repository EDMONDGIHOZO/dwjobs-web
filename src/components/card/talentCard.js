import React from "react";
import Pavatar from "../avatar/pictureAvatar";
import { Link } from "react-router-dom";

const TalentCard = (props) => {
  const { title, description, slug } = props;

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="py-2 md:p-0">
      <div className="flex hover:bg-gray-50 bg-white shadow-lg transform transition duration-500 hover:scale-105 rounded-lg overflow-hidden">
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
            <h1 className="font-regular text-sm py-2 text-green-600">
              {getRandom(200)} Ready
            </h1>
            <Link to={`/category/${slug}`}>
              <button className="p-3 bg-primary text-white text-xs font-bold uppercase hover:bg-secondary">
                View {title}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;

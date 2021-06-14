import React from "react";
import profile from "@/assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = (props) => {
  return (
    <div className="max-w-sm bg-white shadow-md  overflow-hidden my-4">
      <div className="image-container p-4 flex align-center justify-center">
        <img
          src={profile}
          alt="profile"
          className="relative bg-center bg-no-repeat bg-cover w-2/4 rounded-full"
        />
      </div>
      <div className="status flex items-center px-6 py-3 justify-between border-b">
        <FontAwesomeIcon icon={faCheck} color="green" size="1x" />
        <h1 className="mx-3 text-primary font-semibold">Rutagengwa Jean</h1>
      </div>
      <div className="details py-4 px-6">
        <h1 className="font-semibold text-1xl text-gray-800">
          Graphic Designer
        </h1>
        <p className="py-2 text-gray-700">4 years of experience</p>
      </div>
    </div>
  );
};

export default ProfileCard;

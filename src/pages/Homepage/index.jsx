import React from "react";
import logo from "@/assets/images/logo.png";
import Rfb from "@/components/buttons/rfb";
import TalentCard from "@/components/card/talentCard";

const Homepage = () => {
  return (
    <div className="wrapper">
      <section className="bg-gray-100">
        <div className="md:flex">
          <div className="md:w-3/5 w-full h-full bg-primary md:h-screen md:p-20 p-4">
            <div className="logo-container">
              <img src={logo} alt="dw-jobs" className="logo my-10" />
            </div>
            <div className="intro mt-20">
              <p className="md:text-4xl text-4md font-bold leading-snug my-5">
                Find your dream technical Job, or hire the talents from 10%
              </p>
              <p className="md:text-2xl text-2md font-weight-bold">
                We evaluate every applied talent to this platform and select
                only those highly talented people.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6">
              <div className="flex justify-around">
                <input
                  type="text"
                  placeholder="eg: photographer, carpenter"
                  className="bg-gray-100 w-10/12  focus:outline-none rounded-l-full p-3"
                />
                <Rfb
                  rightborder={"rounded-r-full"}
                  title="search"
                  color="bg-secondary"
                  textColor={"text-accent"}
                />
              </div>
            </div>
          </div>
          <div className=" md:w-2/5 w-full bg-gray-100 p-6">
            <div className="flex justify-end align-center border-b-2 pb-6 p-2 ">
              <Rfb
                title="Login"
                color="bg-secondary"
                textColor={"text-white"}
              />
              <Rfb title="Join" color="bg-primary" textColor={"text-white"} />
            </div>

            <h1 className="font-bold uppercase text-gray-500 text-2xl my-5 text-center">
              Available talents
            </h1>

            <div className="md:grid grid-cols-2 gap-3 my-10 overscroll-y-contain">
              <TalentCard
                title={"Designers"}
                description={
                  "hire best designers in kigalier , with enough experience"
                }
              />
              <TalentCard
                title={"Developers"}
                description={"hire theerererer only best developers in town"}
              />
              <TalentCard
                title={"Photographers"}
                description={"hire the only verified photographers in town"}
              />
              <TalentCard
                title={"Architects"}
                description={"hire the only verified photographers in town"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

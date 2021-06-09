import React from "react";
import logo from "@/assets/images/logo.png";
import Rfb from "@/components/buttons/rfb";
import TalentCard from "@/components/card/talentCard";

const Homepage = () => {
  return (
    <div className="wrapper">
      <section className="bg-gray-100">
        <div className="md:flex">
          <div className="md:w-2/4 w-full h-full bg-primary md:h-screen md:p-20 p-4">
            <div className="logo-container">
              <img src={logo} alt="dw-jobs" className="logo my-10" />
            </div>
            <div className="intro mt-20">
              <p className="md:text-4xl text-4md font-bold leading-snug my-5">
                Find the job you deserve , or hire exclusive talents in Rwanda
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
          <div className=" md:w-2/4 w-full bg-gray-100 p-6">
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
                  "we have Graphic Designers, Interior Designers, Web Designers, game designers, ui designers, ux designers ..."
                }
              />
              <TalentCard
                title={"Developers"}
                description={
                  "Frontend Developer, Full stack Developer, Mobile Developer, Data Scientist Developer, DevOps Developer"
                }
              />
              <TalentCard
                title={"Artists"}
                description={
                  "singers, photographers , dancers, painters, illustrators, actors"
                }
              />
              <TalentCard
                title={"Architects"}
                description={
                  "Commercial Architect , Residential Architect , Industrial Architect, Conservation Architect"
                }
              />
              <TalentCard
                title={"Engineers"}
                description={
                  "Civil engineer, Mechanical engineer, Electrical engineer, Environmental engineer."
                }
              />
              <TalentCard
                title={"Hospitality"}
                description={
                  "Cooks, massagers, ushers, translators, Event Planners, Housekeeper"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

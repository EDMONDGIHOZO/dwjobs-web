import React from "react";
import Rfb from "@/components/buttons/rfb";
import TalentCard from "@/components/card/talentCard";
import Wrapper from "@/components/Wrapper";

const Homepage = () => {
  return (
    <Wrapper>
      <section>
        <div className="md:flex">
          <div className="md:w-2/4 w-full h-full md:h-screen md:pt-20 md:px-10">
            <div className="intro mt-20">
              <p className="md:text-4xl text-4md text-primary font-bold leading-snug my-5">
                Find the job you deserve , or hire exclusive{" "}
                <strong className="text-secondary">talents</strong> in Rwanda
              </p>
              <p className="md:text-2xl text-2md font-weight-bold text-gray-500">
                We evaluate every applied talent to this platform and select
                only those highly talented people.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6">
              <div className="flex justify-around">
                <input
                  type="text"
                  placeholder="eg: photographer, carpenter"
                  className="w-10/12 bg-gray-100  focus:outline-none rounded-l-full p-3"
                />
                <Rfb
                  rightborder={"rounded-r-full"}
                  title="search"
                  color="bg-primary"
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
          <div className=" md:w-2/4 w-full p-6">
            <div className="md:grid grid-cols-2 gap-4 my-10 overscroll-y-contain">
              <TalentCard
                title={"Designers"}
                slug="designers"
                description={
                  "we have Graphic Designers, Interior Designers, Web Designers, game designers, ui designers, ux designers ..."
                }
              />
              <TalentCard
                title={"Developers"}
                slug="developers"
                description={
                  "Frontend Developer, Full stack Developer, Mobile Developer, Data Scientist Developer, DevOps Developer"
                }
              />
              <TalentCard
                title={"Engineers"}
                slug="engineers"
                description={
                  "Frontend Developer, Full stack Developer, Mobile Developer, Data Scientist Developer, DevOps Developer"
                }
              />
              <TalentCard
                title={"Artists"}
                slug="artists"
                description={
                  "Frontend Developer, Full stack Developer, Mobile Developer, Data Scientist Developer, DevOps Developer"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Homepage;

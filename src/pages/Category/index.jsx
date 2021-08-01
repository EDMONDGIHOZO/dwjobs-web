import ProfileCard from "@/components/card/profileCard.jsx";
import SideBar from "@/components/sideBar";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Rfb from "@/components/buttons/rfb";
import { useParams } from "react-router";

const Category = () => {
  const { slug } = useParams();

  return (
    <Wrapper>
      <section>
        <div>
          <div className="flex justify-around">
            <input
              type="text"
              placeholder="eg: search for person's name"
              className="w-10/12 bg-gray-300 pl-12 focus:outline-none rounded-l-full p-4"
            />
            <Rfb
              rightborder={"rounded-r-full"}
              title="search"
              color="bg-primary"
              textColor={"text-white"}
            />
          </div>
        </div>
        <h2 className="text-4xl text-center md:m-5"> " {slug} "</h2>
        <div className="md:flex">
          <div className=" md:w-1/5 border-r md:mr-2">
            <SideBar />
          </div>
          <div className="md:w-4/5">
            {/* members cards */}
            <div className="md:grid grid-cols-3  p-3 gap-6 overscroll-y-contain">
              <ProfileCard slug={slug} />
              <ProfileCard slug={slug} />
              <ProfileCard slug={slug} />
              <ProfileCard slug={slug} />
              <ProfileCard slug={slug} />
              <ProfileCard slug={slug} />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Category;

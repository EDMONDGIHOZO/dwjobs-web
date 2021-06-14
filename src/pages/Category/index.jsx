import ProfileCard from "@/components/card/profileCard.jsx";
import SideBar from "@/components/sideBar";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { useParams } from "react-router";

const Category = () => {
  const { slug } = useParams();

  return (
    <Wrapper>
      <section>
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

import React, { useState } from "react";
import { CgRadioChecked } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [categories, setCategories] = useState([
    {
      slug: "designers",
      title: "Designers",
    },
    {
      slug: "developers",
      title: "Developers",
    },
    {
      slug: "engineers",
      title: "Engineers",
    },
    {
      slug: "artists",
      title: "Artists",
    },
  ]);

  return (
    <div className="sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-center uppercase">
                Categories
              </div>
            </div>
          </li>

          {categories.map((cat, index) => {
            return (
              <li key={cat.slug}>
                <Link
                  to={`/category/${cat.slug}`}
                  className="relative flex flex-row items-center h-11 focus:outline-none dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-100 pr-2"
                >
                  <span className="inline-flex justify-center items-center ml-1">
                    <CgRadioChecked color="#C4C4C4" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate uppercase">
                    {cat.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

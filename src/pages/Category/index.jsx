import React from "react";
import { useParams } from "react-router";

const Category = () => {
  const { slug } = useParams();

  return <h1> slug name {slug} </h1>;
};

export default Category;

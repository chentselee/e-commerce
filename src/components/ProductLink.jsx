import React from "react";
import { Link } from "react-router-dom";

const ProductLink = ({ category, name }) => {
  return <Link to={category + "/" + name.replace(/\s/g, "-")}>{name}</Link>;
};

export default ProductLink;

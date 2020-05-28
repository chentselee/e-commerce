import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <ListGroup className="__aside">
      {categories.map((category) => (
        <ListGroup.Item key={category.path}>
          <Link to={category.path}>{category.display_name}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Category;

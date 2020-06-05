import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Category.css";

const Category = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <ListGroup className="__aside">
      {categories.map((category) => (
        <ListGroup.Item key={category.name}>
          <Link to={category.name}>{category.display_name}</Link>
          <Badge pill variant="primary" className="__category-num-badge">
            {category.num_products}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Category;

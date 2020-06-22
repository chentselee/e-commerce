import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import "./Category.css";

const Category = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <ListGroup className="__aside">
      {categories.length ? (
        categories.map((category) => (
          <ListGroup.Item key={category.name}>
            <Link to={"/" + category.name}>{category.display_name}</Link>
            <Badge
              pill
              variant="primary"
              className="__category-num-badge"
              data-testid="num-products"
            >
              {category.num_products}
            </Badge>
          </ListGroup.Item>
        ))
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </ListGroup>
  );
};

export default Category;

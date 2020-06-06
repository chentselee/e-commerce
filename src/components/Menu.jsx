import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ links, categories = "", handleClick }) => {
  return (
    <ListGroup className="__menu" onClick={handleClick}>
      {links.map((link) => (
        <ListGroup.Item key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </ListGroup.Item>
      ))}
      {categories ? (
        <>
          <ListGroup.Item>商品</ListGroup.Item>
          {categories.map((category) => (
            <ListGroup.Item key={category.name} className="__menu-subitem">
              <Link to={category.name}>{category.display_name}</Link>
            </ListGroup.Item>
          ))}
        </>
      ) : (
        ""
      )}
    </ListGroup>
  );
};

export default Menu;

import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BsNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import Menu from "./Menu";
import cartIcon from "../../public/icons/shopping-cart.svg";
import menuIcon from "../../public/icons/menu.svg";
import crossIcon from "../../public/icons/cross.svg";
import "./Navbar.css";

const Navbar = ({ links, categories = "" }) => {
  const cart = useSelector((state) => state.cart);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  useEffect(() => {
    const widthChange = (mq) => {
      if (mq.matches) {
        setMenuIsOpen(false);
      }
    };
    const mqDesktop = window.matchMedia("(min-width: 500px)");
    mqDesktop.addListener(widthChange);
    widthChange(mqDesktop);
    return () => {
      mqDesktop.removeListener(widthChange);
    };
  }, []);
  return (
    <>
      <BsNavbar bg="primary" variant="dark">
        <Link className="navbar-brand" to="/">
          My Shop
        </Link>
        <BsNavbar.Collapse className="__navbar-body">
          <Nav className="__navbar-links-desktop">
            {links.map((link) => (
              <Link key={link.path} className="nav-link" to={link.path}>
                {link.name}
              </Link>
            ))}
          </Nav>
          <Nav>
            <Link className="nav-link __navbar-cart" to="/cart">
              <img className="__navbar-icon" src={cartIcon} />
              <Badge className="__navbar-cart-badge" pill variant="danger">
                {cart.length
                  ? cart.reduce(
                      (accumulator, item) => accumulator + item.amount,
                      0
                    )
                  : ""}
              </Badge>
            </Link>
            <Nav.Link
              className="__navbar-menu"
              as="span"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <img
                className="__navbar-icon __navbar-menu"
                src={menuIsOpen ? crossIcon : menuIcon}
              />
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </BsNavbar>
      {menuIsOpen ? (
        <Menu
          links={links}
          categories={categories}
          handleClick={() => setMenuIsOpen(false)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;

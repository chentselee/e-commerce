import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Category from "../components/Category";

const Home = () => {
  return (
    <div className="__layout-with-aside">
      <Category />
      <Jumbotron className="text-center">
        <h1 className="display-4">My Shop</h1>
        <p className="lead">所有你需要的</p>
      </Jumbotron>
    </div>
  );
};

export default Home;

import "./style.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/actions/categoriesActions";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const links = [
  { name: "關於", path: "about" },
  { name: "聯絡我們", path: "contact" },
];

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <Router>
      <Navbar links={links} />
      <div className="__layout">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/:category">
            <div className="__layout-with-aside">
              <Category />
              <Products />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

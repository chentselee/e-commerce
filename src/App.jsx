import "./style.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./redux/store";
import { fetchCategories } from "./redux/actions/categoriesActions";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Products from "./components/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const links = [
  { name: "關於", path: "about" },
  { name: "聯絡我們", path: "contact" },
];

store.dispatch(fetchCategories());

const App = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <Router>
      <Navbar links={links} categories={categories} />
      <div className="__layout">
        <Switch>
          <Route exact path="/">
            <div className="__layout-with-aside">
              <Category categories={categories} />
            </div>
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
              <Category categories={categories} />
              <Products />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

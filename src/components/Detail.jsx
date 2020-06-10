import React, { useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, cleanUpProducts } from "../redux/actions/productActions";
import { addToCartAction } from "../redux/actions/cartActions";
import "./Detail.css";

const Detail = () => {
  const { category, name } = useParams();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct({ name: name.replaceAll("-", " ") }));
    return () => {
      dispatch(cleanUpProducts());
    };
  }, [dispatch, name]);
  const handleAddToCart = useCallback(
    (item) => {
      dispatch(addToCartAction(item));
    },
    [dispatch]
  );
  return (
    <main>
      {products.length ? (
        <article className="__detail border">
          {products[0].image ? (
            <img
              className="__detail-image"
              src={products[0].image}
              alt="product"
            />
          ) : (
            <div className="__detail-image-placeholder">沒有圖片</div>
          )}
          <section className="__detail-body">
            <main className="__detail-infos">
              <h1 className="__detail-title">{products[0].name}</h1>
              <h2 className="__detail-price">${products[0].price}</h2>
              <p className="__detail-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                laudantium in ipsa ratione id iure.
              </p>
            </main>
            <footer className="__detail-actions">
              {cart.find((item) => item._id === products[0]._id) ? (
                <Button variant="primary" size="sm" disabled>
                  已加入購物車
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleAddToCart(products[0])}
                >
                  加入購物車
                </Button>
              )}
              <Link to="/cart">
                <Button variant="primary" size="sm">
                  前往購物車
                </Button>
              </Link>
            </footer>
          </section>
        </article>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
      <Link to={"/" + category}>
        <Button variant="secondary" className="mt-2">
          ←
        </Button>
      </Link>
    </main>
  );
};

export default Detail;

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, cleanUpProducts } from "../redux/actions/productActions";
import { useParams, Redirect } from "react-router-dom";
import { addToCartAction } from "../redux/actions/cartActions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ProductLink from "./ProductLink";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();

  const { category } = useParams();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (categories.length > 0) {
      const currentCategory = categories.find(
        (_category) => _category.name === category
      );
      currentCategory &&
        dispatch(fetchProduct({ category: currentCategory._id }));
    }
    return () => dispatch(cleanUpProducts());
  }, [category, categories, dispatch]);

  const handleAddToCart = useCallback(
    (item) => {
      dispatch(addToCartAction(item));
    },
    [dispatch]
  );
  return (
    <div className="__products">
      {products.length > 0 ? (
        products.map((product) => (
          <Card key={product.name}>
            {product.image ? (
              <Card.Img className="__product-image" src={product.image} />
            ) : (
              <div className="__product-image-placeholder">
                <span>沒有圖片</span>
              </div>
            )}
            <Card.Body>
              <Card.Title>
                <ProductLink category={category} name={product.name} />
              </Card.Title>
              <Card.Subtitle>${product.price}元</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="__product-links">
              {cart.find((item) => item._id === product._id) ? (
                <Button variant="primary" size="sm" disabled>
                  已加入購物車
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  加入購物車
                </Button>
              )}
            </Card.Footer>
          </Card>
        ))
      ) : categories.find((_category) => _category.name === category) ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Products;

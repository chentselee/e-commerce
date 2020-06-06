import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, cleanUpProducts } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { addToCartAction } from "../redux/actions/cartActions";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Products.css";
import iphone from "../images/iphone-se2-white.png";

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
      dispatch(fetchProduct({ category: currentCategory._id }));
    }
    return () => dispatch(cleanUpProducts());
  }, [category, categories, dispatch]);

  const handleAddToCart = useCallback(
    (id, name, price) => {
      dispatch(addToCartAction(id, name, price));
    },
    [dispatch]
  );
  return (
    <div className="__products">
      {products.length > 0 ? (
        products.map((product) => (
          <Card key={product.name}>
            <Card.Img className="__product-image" src={iphone} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle>${product.price}元</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="__product-links">
              {cart.find((item) => item.id === product._id) ? (
                <Button variant="primary" size="sm" disabled>
                  已加入購物車
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    handleAddToCart(product._id, product.name, product.price)
                  }
                >
                  加入購物車
                </Button>
              )}
            </Card.Footer>
          </Card>
        ))
      ) : (
        <div>沒有商品</div>
      )}
    </div>
  );
};

export default Products;

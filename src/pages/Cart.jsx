import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeAmountInCart,
  removeFromCartAction,
} from "../redux/actions/cartActions";
import ProductLink from "../components/ProductLink";
import "./Cart.css";

const CartItem = ({ _id, no, name, price, amount, category }) => {
  const [currentAmount, setCurrentAmount] = useState(amount);
  const dispatch = useDispatch();
  const handleAmountChange = (e) => {
    dispatch(changeAmountInCart(_id, parseInt(e.target.value)));
    setCurrentAmount(e.target.value);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCartAction(_id));
    handleModalClose();
  };
  return (
    <tr className="__cart-item">
      <td>{no}</td>
      <td>
        <ProductLink category={category.name} name={name} />
      </td>
      <td>${price}</td>
      <td>
        <input
          type="number"
          min="1"
          max="10"
          value={currentAmount}
          onChange={handleAmountChange}
          className="__cart-item-amount"
        />
      </td>
      <td className="__cart-item-subtotal">${price * currentAmount}</td>
      <td>
        <div className="__cart-item-delete" onClick={handleModalOpen}></div>
        <Modal show={modalIsOpen} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>從購物車中移除</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            確定移除物品 <strong>{name}</strong> 嘛？
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              取消
            </Button>
            <Button variant="primary" onClick={handleRemoveFromCart}>
              確定
            </Button>
          </Modal.Footer>
        </Modal>
      </td>
    </tr>
  );
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [matchDesktop, setMatchDesktop] = useState(false);
  useEffect(() => {
    const handleWidthChange = (breakpoint) => {
      if (breakpoint.matches) {
        setMatchDesktop(true);
      } else {
        setMatchDesktop(false);
      }
    };
    const breakpointDesktop = window.matchMedia("(min-width: 500px)");
    breakpointDesktop.addListener(handleWidthChange);
    handleWidthChange(breakpointDesktop);
    return () => {
      breakpointDesktop.removeListener(handleWidthChange);
    };
  }, []);

  const history = useHistory();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce(
        (accumulator, currentItem) =>
          accumulator + currentItem.price * currentItem.amount,
        0
      )
    );
  }, [cart]);
  return (
    <div className="__cart">
      {cart.length ? (
        <>
          <Table bordered hover className={matchDesktop ? "" : "table-sm"}>
            <thead className="thead-dark">
              <tr className="__cart-header-row">
                <th className="__cart-no-col">#</th>
                <th>商品</th>
                <th>價格</th>
                <th className="__cart-amount-col">數量</th>
                <th>小計</th>
                <th className="__cart-remove-col"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartItem key={item._id} no={index + 1} {...item} />
              ))}
            </tbody>
          </Table>
          <p className="__cart-total">總計：＄{total}</p>
        </>
      ) : (
        <div>還沒有任何商品...快去選購吧~</div>
      )}
      <nav className="__cart-nav">
        <Button variant="secondary mt-1" onClick={history.goBack}>
          ←
        </Button>
        {cart.length !== 0 ? (
          <Link to="/cart/checkout/0">
            <Button variant="primary mt-1">結帳去→</Button>
          </Link>
        ) : null}
      </nav>
    </div>
  );
};

export default Cart;

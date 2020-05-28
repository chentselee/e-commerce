import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {cart.length ? (
        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>商品</th>
              <th>價格</th>
              <th>數量</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>還沒有任何商品...快去選購吧~</div>
      )}
    </>
  );
};

export default Cart;

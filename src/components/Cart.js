import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { CartState } from "../context/Context";
import "./styles.css";

function Cart() {
  const [total, setTotal] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((item) => (
            <div>{item.name}</div>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) Items</span>
        <div className="total">Total Price: {total}</div>
      </div>
    </div>
  );
}

export default Cart;

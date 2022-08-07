import React, { createContext, useContext, useReducer } from "react";
import products from "../js/products";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const initialState = {
    products: products,
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

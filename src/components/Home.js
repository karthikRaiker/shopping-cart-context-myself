import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

function Home() {
  const {
    state: { products, cart },
  } = CartState();
  console.log(products, cart);

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.length
          ? products.map((prod) => {
              return <SingleProduct prod={prod} key={prod.id} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect, useContext } from "react";
import Product from "../Product/index";
// import AddForm from "../Product/AddForm";
// import axios from "axios";
import Context from "../../contexts/TryContext";
import styled from "styled-components";
import styles from "./styles";
import PropTypes from "prop-types";


function Home({ className, products }) {

  const [theme, headerColor] = useContext(Context);

  // useEffect(() => {
  //   async function getProducts() {
  //     const products = await axios.get(
  //       "https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a"
  //     );
  //     setProducts(products.data);
  //   }

  //   getProducts();
  // }, []);

  // let currentProductId = 9;

  // function addProduct(product) {
  //   console.log("Added Product", product);
  //   const newProduct = { id: ++currentProductId, ...product };
  //   setProducts([...products, newProduct]);
  // }
  // const CheckRendering = () => {
  //   if (products.length > 0) {
  //     return renderProduct(products);
  //   }
  //   return renderLoading();
  // };

  // function renderProduct() {
  //   return (
  //     <ul className="{Home__products}">
  //       {products.map((product) => (
  //         <Product key={product.id} item={product} />
  //       ))}
  //     </ul>
  //   );
  // }

  // function renderLoading() {
  //   return <div style={{ color: theme.mainColor }}>Loading products....</div>;
  // }

  //mark for ternary
  const RenderTernary = () => {
    return products.length > 0 ? (
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    ) : (
      <div>Loading products....</div>
    );
  };

  return (
    <>
      <div className={className}>
        <h1 style={{ color: headerColor.mainColor }}>New Products</h1>
        {<RenderTernary />}
        {/* <AddForm addProduct={addProduct} /> */}
      </div>
    </>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Home)`
  ${styles}
`;

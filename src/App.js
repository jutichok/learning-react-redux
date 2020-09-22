import React, { useEffect, useState } from "react";
import Container from "./features/Container/";
import Home from "./features/Home/";
import Navbar from "./features/Navbar/";
import Context from "./contexts/TryContext";
import { Switch, Route, Link } from "react-router-dom";
import AddForm from "./features/Product/AddForm";
import UpdateForm from "./features/Product/UpdateForm";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "./features/Product/actions";
function App() {
  const theme = { mainColor: "chocolate" };
  const headerColor = { mainColor: "red" };
  const products = useSelector(state => state.products)

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        "https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a"
      );
      console.log(products.data)
      dispatch(fetchProducts(products.data));
    }

    getProducts();
  }, []);



  

  // function getCurrentProduct(productId) {
  //   console.log("productid ", productId);
  //   const result = products.find((product) => {
  //     console.log(product);
  //     return product.id == productId;
  //   });
  //   console.log("Result = ", result);
  //   return result;
  // }

  return (
    <>
      <Context.Provider value={[theme, headerColor]}>
          <Navbar />
        <Container>
          {products.length > 0 ? (
            <Switch>
              <Route path="/create-product">
                  <AddForm />
              </Route>
              <Route path="/update-product/:id">
                <UpdateForm  />
              </Route>
              <Route path="/">
                <Home products={products} />
              </Route>
            </Switch>
          ) : (
            <div>Loading products....</div>
          )}
        </Container>
      </Context.Provider>
    </>
  );
}
export default App;

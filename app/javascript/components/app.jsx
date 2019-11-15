import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Router } from "@reach/router";
import Navbar from "./Navbar";
import Login from "./Login";
import CreateProduct from "./CreateProduct";
import Cart from "./Cart";
import Order from "./Order";
import Item from "./Item";
function App() {
  const [productCart, setProductCart] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const userDataElement = document.getElementById("user");
    if (userDataElement) {
      setCurrentUser(JSON.parse(userDataElement.text));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Router>
        <Login path="/login" />
        <Home
          path="/"
          setProductCart={setProductCart}
          productCart={productCart}
        />
        <CreateProduct path="/createProduct" />
        <Cart
          path="/cart"
          productCart={productCart}
          currentUser={currentUser}
        />
        <Order path="/order" />
        <Item path="/item" />
      </Router>
    </>
  );
}
export default App;

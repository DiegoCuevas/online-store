import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { allProduct } from "../services/Store";
import Modal from "react-modal";
import UpdateProduct from "./UpdateProduct";

function Home({ productCart, setProductCart, products, setProducts }) {
  const [showModal, setShowModal] = useState({});
  console.log(productCart);

  const handleCart = product => {
    setProductCart(current => {
      if (current[product.id]) {
        return {
          ...current,
          [product.id]: {
            ...product,
            quantity: current[product.id].quantity + 1
          }
        };
      }
      return { ...current, [product.id]: { ...product, quantity: 1 } };
    });
  };

  const handleOpenModal = product =>
    setShowModal(current => ({ ...current, [product]: true }));

  const handleCloseModal = product =>
    setShowModal(current => ({ ...current, [product]: false }));

  return (
    <>
      <p>
        {" "}
        <Link to="/createProduct">Create product</Link>
      </p>
      <h2>
        {products.map(product => (
          <p>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <button onClick={() => handleOpenModal(product.id)}>
              Update product
            </button>
            <Modal isOpen={showModal[product.id]}>
              <UpdateProduct
                handleCloseModal={handleCloseModal}
                product={product}
                setProducts={setProducts}
              />
            </Modal>
            <button onClick={() => handleCart(product)}>Add to cart</button>
          </p>
        ))}
      </h2>
    </>
  );
}

export default Home;

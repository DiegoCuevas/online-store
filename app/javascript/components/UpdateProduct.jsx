import React from "react";
import { Formik } from "formik";
import { updateProduct } from "../services/Store";

function UpdateProduct({ handleCloseModal, product, setProducts }) {
  const handleSubmit = async values => {
    const price = Math.round(parseFloat(values.price * 100));
    await updateProduct({ ...values, price });
  };
  return (
    <div>
      <Formik
        initialValues={{
          id: product.id,
          price: product.price,
          name: product.name,
          description: product.description
        }}
        onSubmit={handleSubmit}
        render={({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">
                name:{" "}
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Product's name"
                />
              </label>
            </div>
            <div>
              <label htmlFor="price">
                price:{" "}
                <input
                  type="integer"
                  id="price"
                  name="price"
                  onChange={handleChange}
                  value={values.price}
                  placeholder="price"
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                description:{" "}
                <input
                  type="text"
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="description"
                />
              </label>
            </div>
            <button type="submit">submit</button>
            <button onClick={() => handleCloseModal(product.id)}>
              Close Modal
            </button>
          </form>
        )}
      />
    </div>
  );
}

export default UpdateProduct;

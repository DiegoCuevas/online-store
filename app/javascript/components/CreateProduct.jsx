import React from "react";
import { Formik } from "formik";
import { createProduct } from "../services/Store";
import { Link, navigate } from "@reach/router";

function CreateProduct() {
  const handleSubmit = async values => {
    const price = Math.round(parseFloat(values.price * 100))
    await createProduct({...values, price });
    navigate("/")
  };

  return (
      <div>
        <Formik
          initialValues={{
            price: "",
            name: "",
            description: ""
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
            </form>
          )}
        />
      </div>
  );
}

export default CreateProduct;

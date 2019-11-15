import React, { useState } from "react";
import { createOrder } from "../services/orders";

function Cart({ productCart, currentUser }) {
  const [address, setAddress] = useState("");
  const handleSubmit = async _event => {
    const items_attributes = Object.entries(productCart).map(
      ([productId, product]) => ({
        quantity: product.quantity,
        product_id: productId
      })
    );
    await createOrder(currentUser.id, {
      order: {
        user_id: currentUser.id,
        store_id: 1,
        destination: address,
        status: "Pending",
        items_attributes
      }
    });
  };
  return (
    <div>
      <p>
        {Object.values(productCart).map(prod => (
          <div>
            <p>
              <div>
                <span>Name:</span>
                <span>{prod.name}</span>
              </div>
              <div>
                <span>Description:</span>
                <span>{prod.description}</span>
              </div>
              <div>
                <span>Quantity:</span>
                <span>{prod.quantity}</span>
              </div>
              <div>
                <span>price </span>
                <span>S/ {prod.price * prod.quantity}</span>
              </div>
            </p>
          </div>
        ))}
        <form>
          <input
            value={address}
            type="text"
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Address"
          />
        </form>
        <span>Total Price:</span>
        <span>
          {Object.values(productCart).reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )}
        </span>
      </p>
      <button onClick={handleSubmit}>Order</button>
    </div>
  );
}

export default Cart;

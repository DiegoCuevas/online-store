import React, { useState, useEffect } from "react";
import { showOrder } from "../services/orders";

function Order({ currentUser, products }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    async function fetchOrders() {
      const response = await showOrder(currentUser.id);
      setOrders(response);
    }
    fetchOrders();
  }, [currentUser]);

  console.log(products);
  // const productsMap = products.reduce((acc, product) => {
  //   return {
  //     ...acc,
  //     [product[key]]: product
  //   };
  // }, {});
  // console.log(productsMap);
  if(products) {
    
  }
  return (
    <>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <>
            <li key={`order-${order.id}`}>
              {order.id}: {order.status} <br />
              destination: {order.destination} 
            </li>
            {order.items.map(item => (
              <ul>
                <li>
                  product: {item.product_id} <br />
                  quantity: {item.quantity}
                  <br />
                  cost : {item.cost}
                </li>
              </ul>
            ))}
            <div>total cost: {order.total_cost}</div>
          </>
        ))}
      </ul>
    </>
  );
}

export default Order;

const API_ORDER = "/api/users";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function createOrder(id, values) {
  const response = await fetch(`${API_ORDER}/${id}/orders`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

async function updateOrder(id, order_id, values) {
  const response = await fetch(`${API_ORDER}/${id}/orders/${order_id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ values })
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

async function showOrder(id) {
  const response = await fetch(`${API_ORDER}/${id}/orders`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

export {createOrder, showOrder, updateOrder };

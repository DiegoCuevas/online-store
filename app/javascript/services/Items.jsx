const API_ITEMS = "/api/users";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function createItem(id, order_id, values) {
  const response = await fetch(`${API_ITEMS}/${id}/orders/${order_id}/items`, {
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

async function allItems(id, order_id) {
  const response = await fetch(`${API_ITEMS}/${id}/orders/${order_id}/items`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}


async function updateItem(id, order_id, item_id, data) {
  const response = await fetch(
    `${API_ITEMS}/${id}/orders/${order_id}/items/${item_id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data})
    }
  );
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

export { updateItem, createItem, allItems };

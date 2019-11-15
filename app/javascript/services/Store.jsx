const API_PRODUCTS = "/api/stores";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function createProduct(values) {
  const response = await fetch(`${API_PRODUCTS}/1/products`, {
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

async function allProduct() {
  const response = await fetch(`${API_PRODUCTS}/1/products`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

async function deleteProduct(productId) {
  const response = await fetch(`${API_PRODUCTS}/1/products/${productId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

async function updateProduct(value) {
  const response = await fetch(`${API_PRODUCTS}/1/products/${value.id}`, {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify(value),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

async function oneProduct(value) {
  const response = await fetch(`${API_PRODUCTS}/1/products/${value.id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

export { createProduct, updateProduct, deleteProduct, allProduct, oneProduct };

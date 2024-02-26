export const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

export const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

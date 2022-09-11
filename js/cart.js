const getInputValueById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  inputField.value = ``;
  return inputValue;
};

const addProduct = () => {
  const product = getInputValueById("product-name-field");
  const quantity = getInputValueById("product-quantity-field");
  //   display Product on UI
  addProductsToDisplay(product, quantity);
  // set local storage
  // simple way
  // localStorage.setItem(product, quantity);
  saveItemToLS(product, quantity);
};

const getCartFromLS = () => {
  let savedCart = localStorage.getItem("cart");
  let cart = {};
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  return cart;
};

const saveItemToLS = (product, quantity) => {
  const cart = getCartFromLS();
  // add product to the Object as property
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);

  // save to local storage
  localStorage.setItem("cart", cartStringified);
};

const addProductsToDisplay = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.appendChild(li);
};

const displayStoredProducts = () => {
  const cart = getCartFromLS();
  for (const product in cart) {
    const quantity = cart[product];
    console.log(product, quantity);
    addProductsToDisplay(product, quantity);
  }
};
displayStoredProducts();

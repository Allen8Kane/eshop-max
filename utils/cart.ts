const getCart = () => {
  const cart = localStorage.getItem("cart");
  return JSON.parse(cart || "[]");
};

const addToCart = (product: any) => {
  if (isInCart(product.id)) {
    return;
  }
  const cart = getCart();
  console.log(cart);
  const newCart = [...cart, product];
  localStorage.setItem("cart", JSON.stringify(newCart));
};

const removeFromCart = (productId: string) => {
  const cart = getCart();
  const newCart = cart.filter((p: any) => p.id !== productId);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

const isInCart = (productId: string) => {
  const cart = getCart();
  return cart.some((p: any) => p.id === productId);
};

export { getCart, addToCart, removeFromCart };

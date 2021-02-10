export const handleSum = (cart) => {
  const sum = cart.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
  return sum;
};

module.exports = {
  discountedPrice(product) {
    return product.price * (1 - (product.discount || 0));
  }
};

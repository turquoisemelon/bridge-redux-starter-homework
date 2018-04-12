export const ACTION_TYPES = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
};

export const addProduct = (product) => ({
    type: ACTION_TYPES.ADD_PRODUCT,
    payload: {
      product,
    }
});

export const removeProduct = (product) => ({
    type: ACTION_TYPES.REMOVE_PRODUCT,
    payload: {
      product,
    }
});

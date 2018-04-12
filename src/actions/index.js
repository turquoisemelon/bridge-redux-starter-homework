export const ACTION_TYPES = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  SET_PRODUCT_NAME: 'SET_PRODUCT_NAME',
  SET_PRODUCT_DEPARTMENT: 'SET_PRODUCT_DEPARTMENT',
  CLEAR_INPUT_FIELD: 'CLEAR_INPUT_FIELD',
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

export const setProductName = (productName) => ({
    type: ACTION_TYPES.SET_PRODUCT_NAME,
    payload: {
      productName,
    }
});

export const setProductDepartment = (productDepartment) => ({
    type: ACTION_TYPES.SET_PRODUCT_DEPARTMENT,
    payload: {
      productDepartment,
    }
});

export const clearInputField = (param) => ({
    type: ACTION_TYPES.CLEAR_INPUT_FIELD,
    payload: {
      param,
    }
});

import { createSelector, createStructuredSelector } from 'reselect';

const selectProductList = state => state.products.productList;
const selectProductName = state => state.products.productName;
const selectProductDepartment = state => state.products.productDepartment;
const selectsearchString = state => state.products.searchString;
const filteredProductList = createSelector(
  selectProductList,
  selectsearchString,
  (productList, searchString) => searchString.length
    ? productList.filter((product) => product.name.search(searchString) !== -1)
    : productList
);

export const appConnector = createStructuredSelector({
  productList: filteredProductList,
  productName: selectProductName,
  productDepartment: selectProductDepartment,
  searchString: selectsearchString,
});

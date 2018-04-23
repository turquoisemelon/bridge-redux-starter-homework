import { connect } from 'react-redux';
import { appConnector } from './App.selectors';
import App from './App.component';
import {
    addProduct,
    removeProduct,
    setProductName,
    setProductDepartment,
    clearInputField,
    getSearchParam
} from './actions/index';

const mapDispatchToProps = {
  addProduct: addProduct,
  removeProduct: removeProduct,
  setProductName: setProductName,
  setProductDepartment: setProductDepartment,
  clearInputField: clearInputField,
  getSearchParam: getSearchParam,
};

export default connect(appConnector, mapDispatchToProps)(App);

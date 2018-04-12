import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addProduct, removeProduct, setProductName, setProductDepartment, clearInputField} from './actions/index';
import Chance from 'chance';

export const chance = Chance();

const Product = (props) => {
    return <div>
        {props.name} | {props.department}
    </div>;
}

const Title = ({text}) => <h1>{text}</h1>;

const AdderButton = ({addProduct, productList, productName, productDepartment, clearInputField}) =>
<button onClick={() => {
    addProduct({id: productList.length+1, name: productName, department: productDepartment});
    clearInputField('');
}}>
    Add Product
</button>

const RemoverButton = ({removeProduct, productList}) => <button onClick={() => removeProduct({id: productList.length-1})}>Remove Product</button>

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addProduct({
      id: chance.guid(),
      name: 'Table',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    });
  }

  render() {
    const {productList, add, setProductName, setProductDepartment, productName, productDepartment} = this.props;

    return (
      <div className="products">
        <div className="product-form">
            <Title text="Product Information Form"/>
            <input
                value={productName || ''}
                onChange={(event) => setProductName(event.target.value)}
                placeholder="name"
            />
            <input
                value={productDepartment || ''}
                onChange={(event) => setProductDepartment(event.target.value)}
                placeholder="department"
            />
            <AdderButton {...this.props} />
        </div>
        <div className="product-list">
            <Title text="Product List"/>
            {productList.map(product => <Product name={product.name} key={product.id} department={product.department}/>)}
            <RemoverButton {...this.props} />
        </div>
      </div>
    );
  }
}


// React x REDUX STUFF

const mapStateToProps = state => {
  return {
    productList: state.products.productList,
    productName: state.products.productName,
    productDepartment: state.products.productDepartment,

    // an example of how to derive state in the mapStateToProps function - this is a specific 'subset' of the full list
    lowStockProducts: state.products.productList.filter(prod => prod.stock && prod.stock < 4),
  }
};

const mapDispatchToProps = {
  addProduct: addProduct,
  removeProduct: removeProduct,
  setProductName: setProductName,
  setProductDepartment: setProductDepartment,
  clearInputField: clearInputField,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

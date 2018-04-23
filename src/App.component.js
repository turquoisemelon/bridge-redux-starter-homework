import React, {Component} from 'react';
import './App.css';
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

export default class App extends Component {
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
    const {productList, setProductName, setProductDepartment, productName, productDepartment, searchString, getSearchParam} = this.props;

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
            <div className="search-bar">
                <input
                    value={searchString}
                    type="text"
                    placeholder="Search Products"
                    onChange={(event) => getSearchParam(event.target.value.toLowerCase())}
                />
            </div>
            {
              productList.map(product => <Product name={product.name} key={product.id} department={product.department}/>)
            }
            <RemoverButton {...this.props} />
        </div>
      </div>
    );
  }
}

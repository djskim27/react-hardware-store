import React, { Component } from 'react';
import ProductList from './ProductList'
class CartView extends Component {
    render(){
        const productList = this.props.productList;
        return(
            <div>
                <h1>Shopping Cart</h1>
                <h2>Shopper's Products</h2>
                <ProductList
                productList = {productList} />
            </div>
        )
    }
}

export default CartView;
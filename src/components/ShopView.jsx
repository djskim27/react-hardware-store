import React, { Component } from 'react';
import ProductList from './ProductList'


class ShopView extends Component {
    render() {

        const productList = this.props.productList;
       
        return (
            <div>
                <h1>Shop View</h1>

                <h2>Products</h2>
                
                  <ProductList 
                  adminMode = {this.props.adminMode} 
                  productList = {productList} 
                  
                  addToCart = {this.props.addToCart}

                  /> 
                 
            
            </div>
        )
    }
}

export default ShopView;
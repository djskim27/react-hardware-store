import React, { Component } from 'react';

import ProductList from './ProductList';

class CartView extends Component {
    render() {
      

        return (
            <div>
                <h1>Cart View</h1>

                <ProductList 
                    productList={this.props.productList} 
                    
                    addToCart={this.props.addToCart} 
                    />

            
            </div>
        );

    }
}

export default CartView;
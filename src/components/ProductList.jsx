
import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.productList;

        const productComponents = productList.map((product, index) => {
            return <Product
                admiMode={this.props.adminMode}
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index}
                id={index}
                deleteProductFromListByIndex={this.props.deleteProductFromListByIndex}
                addToCart={this.props.addToCart} 
                />
        });

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;
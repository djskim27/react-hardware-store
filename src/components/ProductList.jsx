import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
    
    
    render() {
        const productList = this.props.productList;
        const deleteProductFromProductList =this.props.deleteProductFromProductList;
        const adminMode = this.props.adminMode
        console.log(productList);
    
        const productComponents = productList.map((product, index) => {
            return <Product 
                adminMode = {adminMode}
                deleteProduct = {deleteProductFromProductList}
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index} 
                id={index}/>

        });

        return (
            <div>
                {productComponents}
            </div>
        );

    }
}

export default ProductList;
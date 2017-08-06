 import React, {Component} from 'react';
 
 class Product extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         newProduct: {}
    //     }
    // }
    
    _deleteProduct = () => {
       

        this.props.deleteProduct(this.props.id);
    };

   render() {
     const productName = this.props.productName;
     const description = this.props.description;
     const price = this.props.price;
     const admin = this.props.adminMode;
   
     return (
         <div>
           <h3>{productName}</h3>
           <div>{description}</div>
           <div>{price}</div>
           {admin? 
           <button onClick={this._deleteProduct}>Delete</button>:null}
         </div>
     );
 
   }
 }
 
 export default Product;
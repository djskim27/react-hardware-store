import React, { Component } from 'react';
import AdminView from './AdminView'
import ShopView from './ShopView'

class HomePage extends Component {

    constructor() {
        super();

        this.state = {
            itemCurrentlyOnSale: 'A Hammer',
            editSaleItem: true,
            productList: [
                {
                    productName: 'Hammer',
                    description: 'Itsa hammer',
                    price: 12.3,
                },
                {
                    productName: 'Nail',
                    description: 'Itsa nail',
                    price: 0.12,
                }
            ],
            AdminMode: false
            
        };
    }
    _toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem });
    };

    _handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;

        this.setState({ itemCurrentlyOnSale });
    };

    _addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({ productList });
    };

    _deleteProductFromProductList = (target) => {
        const productList = [...this.state.productList];
        productList.splice(target, 1);
        this.setState({ productList })
    }

    _toggleAdminMode = () => {
        const AdminMode = !this.state.AdminMode;
        this.setState({AdminMode});
    }

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <button onClick={this._toggleAdminMode}>Change View</button>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    {this.state.AdminMode ? <span><button onClick={this._toggleEditSaleItem}>{this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}</button></span> : null}

                    {this.state.AdminMode?
                    <div>
                    {this.state.editSaleItem ? <div><input onChange={this._handleItemCurrentlyOnSaleChange} value={this.state.itemCurrentlyOnSale} type="text" />Edit</div> : null}
                    </div>:null}


                    {this.state.AdminMode ?
                        <AdminView adminMode = {this.state.AdminMode}
                            productList={this.state.productList}
                            addNewProductToProductList={this._addNewProductToProductList}
                            deleteProductFromProductList={this._deleteProductFromProductList}
                           /> :
                        <ShopView adminMode = {this.state.AdminMode} productList={this.state.productList}/>}
                </div>
            </div>
        );
    }
}

export default HomePage;
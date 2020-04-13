//import React from 'react';
import { SellerList } from '.';
import PropTypes from 'prop-types';

import Cart from '../cart';
import Products from '../products';
import Navbar from '../navbar';
import './seller.css';


import React, { Component } from 'react';

class Seller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    setVisibility = () => {
        this.setState({
            visible: false
        })
    }


    render() {
        let { search, updateSearch, products, addItemToCartHandler, totalCartValue, cartProducts, removeItemFromCart } = this.props;
        let sellerVisible, productsVisible = false
        let href = window.location.href
        if (href === 'http://localhost:3000/sellers/' || href === 'http://localhost:3000/sellers') {
            sellerVisible = true
        }
        href = window.location.href.split("/")
        let sellerId = href[href.length - 1]
        if (window.location.href === ('http://localhost:3000/sellers/' + sellerId) && sellerId !== '') {
            productsVisible = true
        }

        return (
            <>
                <Navbar
                    search={search}
                    updateSearch={updateSearch}
                />
                <div className="grid-container">
                    <div className="grid-item item1">
                        {sellerVisible ? <SellerList setVisibility={this.setVisibility}/> : null}
                        {productsVisible ? <Products products={products} addItemToCartHandler={addItemToCartHandler} search={search} /> : null}
                    </div>
                    <div className="grid-item item2">
                        <Cart
                            totalCartValue={totalCartValue}
                            cartProducts={cartProducts}
                            removeItemFromCart={removeItemFromCart}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Seller;

// const Seller = ({ search, updateSearch, products, addItemToCartHandler, totalCartValue, cartProducts, removeItemFromCart }) => {


// }

Seller.propTypes = {
    search: PropTypes.string,
    updateSearch: PropTypes.func,
    products: PropTypes.object,
    addItemToCartHandler: PropTypes.func,
    totalCartValue: PropTypes.number,
    cartProducts: PropTypes.object,
    removeItemFromCart: PropTypes.func
}

//export default Seller;
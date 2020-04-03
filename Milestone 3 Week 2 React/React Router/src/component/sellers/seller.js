import React from 'react';
import Cart from '../cart';
import Products from '../products';
import Navbar from '../navbar';
import { SellerList } from '.';
import './seller.css';

const Seller = ({ search, updateSearch, products, addItemToCartHandler, totalCartValue, cartProducts, removeItemFromCart }) => {

    let sellerVisible, productsVisible = false
    if (window.location.href === ('http://localhost:3000/sellers')) {
        sellerVisible = true
    }
    let href = window.location.href.split("/")
    let sellerId = href[href.length - 1]
    if (window.location.href === ('http://localhost:3000/sellers/' + sellerId)) {
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
                    {sellerVisible ? <SellerList /> : null}
                    {productsVisible ? <Products
                        products={products}
                        addItemToCartHandler={addItemToCartHandler}
                        search={search}
                    /> : null}
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

export default Seller;
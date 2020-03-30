import React from 'react';
import Cart from '../cart';
import Products from '../products';
import Navbar from '../navbar';
import { SellerList } from '.';
import './seller.css';

const Seller = ({ search, updateSearch, products, addItemToCartHandler, totalCartValue, cartProducts, removeItemFromCart }) => {
    return (
        <>
            <Navbar
                search={search}
                updateSearch={updateSearch}
            />
            <div className="grid-container">
                <div className="grid-item item1">
                    <SellerList />
                    <Products
                        products={products}
                        addItemToCartHandler={addItemToCartHandler}
                        search={search}
                    />
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
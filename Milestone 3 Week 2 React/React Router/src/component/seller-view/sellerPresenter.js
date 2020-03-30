import React from 'react';
import { CartView } from '../cart-view';
import { SellerList } from './';
import { ProductsView } from '../products-view';
import Navbar from '../navbar';
import './sellerPresenter.css';

const SellerPresenter = ({search, updateSearch, products, addItemToCartHandler, totalCartValue, cartProducts, removeItemFromCart}) => {
    return (
        <>
            <Navbar
                search={search}
                updateSearch={updateSearch}
            />
            <div className="grid-container">
                <div className="grid-item item1">
                    <SellerList />
                    <ProductsView
                        products={products}
                        addItemToCartHandler={addItemToCartHandler}
                        search={search}
                    />
                </div>
                <div className="grid-item item2">
                    <CartView
                        totalCartValue={totalCartValue}
                        cartProducts={cartProducts}
                        removeItemFromCart={removeItemFromCart}
                    />
                </div>
            </div>
        </>
    );
}

export default SellerPresenter;
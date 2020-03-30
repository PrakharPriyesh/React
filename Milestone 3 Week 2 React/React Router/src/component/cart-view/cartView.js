import React from 'react';
import { CartItem } from './'
import './cartView.css'

const CartView = ({ totalCarValue, cartProducts, removeItemFromCart }) => {
    return (
        <>
            <div className="cart-bar">
                <font className="cart-name">Black Bag</font>
                <font className="cart-value">&#8377; {totalCarValue}</font>
            </div>
            <hr />
            <CartItem
                cartProducts={cartProducts}
                removeItemFromCart={removeItemFromCart}
            />
        </>
    );
}

export default CartView;
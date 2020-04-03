import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '.';
import './cart.css';

const Cart = ({ totalCarValue, cartProducts, removeItemFromCart }) => {
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

Cart.propTypes = {
    totalCarValue: PropTypes.number,
    cartProducts: PropTypes.object,
    removeItemFromCart: PropTypes.func
}


export default Cart;
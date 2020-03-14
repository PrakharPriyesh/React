import React from 'react';
import Cart from './cart'
import './cartView.css'

function cartView(props) {
    return (
        <>
            <div className="cart-bar">
                <font className="cart-name">Black Bag</font>
                <font className="cart-value">&#8377; {props.total_cart_value}</font>
            </div>
            <Cart
                cart_products={props.cart_products}
                removeItemFromCart={props.removeItemFromCart}
            />
        </>
    );
}

export default cartView;
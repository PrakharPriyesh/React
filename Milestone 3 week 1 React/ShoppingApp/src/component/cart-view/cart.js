import React from 'react';
import './cart.css'

function Cart(props) {
    let items = null
    let cart_products = { ...props.cart_products };

    items = (
        Object.keys(cart_products).map(function (key) {
            const element = cart_products[key]
            return (
                // Did not create another component as css were different will learn to use relative dimensions
                <div className="cart-product-card" key={key}>
                    <div className="cart-product-body">
                        <img className="cart-product-img" src={element.img} alt={element.img} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }} />
                        <div className="cart-product-name">{element.name}</div>
                        <div className="cart-product-text">
                            <b>Rs. {element.price} X {element.count}</b>
                        </div>
                        <button className="cart-product-button" id={key} onClick={props.removeItemFromCart} >Remove</button>
                    </div>
                </div>
            )
        })
    )

    return (
        <>
            {items}
        </>
    );
}

export default Cart;
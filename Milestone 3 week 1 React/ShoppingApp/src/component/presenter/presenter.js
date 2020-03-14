import React from 'react';
import './presenter.css';
import Products from '../products/products'
import CartView from '../cart-view/cartView'

function presenter(props) {
    let products = props.products
    let search_text = props.search

    const filtered_products = (
        Object.keys(products).map(function (key) {
            if (products[key].name.toLowerCase().indexOf(search_text) !== -1) {
                let data = {}
                data[key] = products[key]
                return data
            }
            return null
        })
    )

    return (
        <div className="grid-container">
            <div className="grid-item item1">
                <Products
                    products={filtered_products}
                    click={props.addItemToCartHandler}
                />
            </div>
            <div className="grid-item item2">
                <CartView
                    total_cart_value={props.total_cart_value}
                    cart_products={props.cart_products}
                    removeItemFromCart={props.removeItemFromCart}
                />
            </div>
        </div>
    );
}

export default presenter;
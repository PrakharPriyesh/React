import React, { Component } from 'react';
import Navbar from './component/navbar/navbar'
import Presenter from './component/presenter/presenter'
import util_products from './utils/utils'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart_products: {},
            products: util_products,
            total_cart_value: 0,
            search: '',
        }
    }

    addItemToCartHandler = (e) => {
        let id = e.currentTarget.id
        const { cart_products, products } = this.getUpdatedDetails(id, "add")
        const amount = this.totalCartValue(cart_products)
        this.setState({
            cart_products: cart_products,
            products: products,
            total_cart_value: amount
        })
    }

    removeItemFromCart = (e) => {
        let id = e.currentTarget.id
        const { cart_products, products } = this.getUpdatedDetails(id, "remove")
        const amount = this.totalCartValue(cart_products)
        this.setState({
            cart_products: cart_products,
            products: products,
            total_cart_value: amount
        })
    }

    totalCartValue = (cart_products) => {
        let amount = 0
        Object.keys(cart_products).map(function (key) {
            amount = amount + cart_products[key].count * cart_products[key].price
            return 0
        })
        return amount
    }

    getUpdatedDetails = (id, option) => {
        if (option === "add") {
            let products = { ...this.state.products }
            let cart_products = { ...this.state.cart_products }
            let item_to_add = { ...products[id] };

            item_to_add.stock = item_to_add.stock - 1
            item_to_add.count = item_to_add.count + 1

            if (item_to_add.stock === -1) {
                item_to_add = null
                alert("No Stock")
                return { cart_products, products }
            }
            else {
                products[id] = { ...item_to_add }
            }

            if (cart_products[id]) {
                item_to_add.count = cart_products[id].count + 1
            }
            cart_products[id] = item_to_add

            return { cart_products, products }
        }

        else {
            let cart_products = { ...this.state.cart_products }
            let products = { ...this.state.products }
            let item_to_update = { ...products[id] }
            item_to_update.stock = item_to_update.stock + 1
            products[id] = item_to_update

            if (cart_products[id].count === 1) {
                delete cart_products[id]
            }
            else {
                cart_products[id].count = cart_products[id].count - 1
            }
            return { cart_products, products }
        }
    }

    updateSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <>
                <Navbar
                    search={this.state.search}
                    updateSearch={this.updateSearch}
                />
                <Presenter
                    total_cart_value={this.state.total_cart_value}
                    cart_products={this.state.cart_products}
                    products={this.state.products}
                    search={this.state.search}
                    addItemToCartHandler={this.addItemToCartHandler}
                    removeItemFromCart={this.removeItemFromCart}
                />

            </>
        );
    }
}

export default Home;
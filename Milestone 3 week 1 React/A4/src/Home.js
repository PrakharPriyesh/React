import React, { Component } from 'react';
import Products from './component/products/products'
import Cart from './component/cart/cart'
import { Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart_products: {},
            products: {
                "x1": { name: "Wing Chair", price: 100, img: "https://www.ikea.com/in/en/images/products/strandmon-wing-chair__0690287_PE723209_S5.JPG", stock: 2, count: 0 },
                "x2": { name: "Mobile", price: 200, img: "https://images-na.ssl-images-amazon.com/images/I/51s0Mb5li8L._SL1000_.jpg", stock: 1, count: 0 },
                "x3": { name: "Loafers", price: 300, img: "https://images-na.ssl-images-amazon.com/images/I/51i3YskwkTL._AC_UY500_.jpg", stock: 1, count: 0 },
                "x4": { name: "Headphones", price: 200, img: "https://imgres.tailbase.com/rzdimg/prods/800/531721_1.jpg", stock: 100, count: 0 },
                "x5": { name: "Plants", price: 200, img: "https://ae01.alicdn.com/kf/HTB1xSiYe63z9KJjy0Fmq6xiwXXaj/Home-Glass-Vase-Terrarium-Vases-Transparent-Flower-Pots-Tabletop-Glass-Modern-Vaso-Wedding-Floor-Air-Planter.jpg", stock: 100, count: 0 },
                "x6": { name: "Decoration", price: 100, img: "https://www.ikea.com/in/en/images/products/aeppelviken-chandelier-4-armed__0627387_PE693323_S5.JPG", stock: 100, count: 0 },
                "x7": { name: "Wing Chair", price: 100, img: "https://www.ikea.com/in/en/images/products/strandmon-wing-chair__0690287_PE723209_S5.JPG", stock: 2, count: 0 },
                "x8": { name: "Mobile", price: 200, img: "https://images-na.ssl-images-amazon.com/images/I/51s0Mb5li8L._SL1000_.jpg", stock: 1, count: 0 },
                "x9": { name: "Loafers", price: 300, img: "https://images-na.ssl-images-amazon.com/images/I/51i3YskwkTL._AC_UY500_.jpg", stock: 1, count: 0 },
                "x10": { name: "Headphones", price: 200, img: "https://imgres.tailbase.com/rzdimg/prods/800/531721_1.jpg", stock: 100, count: 0 },
                "x11": { name: "Plants", price: 200, img: "https://ae01.alicdn.com/kf/HTB1xSiYe63z9KJjy0Fmq6xiwXXaj/Home-Glass-Vase-Terrarium-Vases-Transparent-Flower-Pots-Tabletop-Glass-Modern-Vaso-Wedding-Floor-Air-Planter.jpg", stock: 100, count: 0 },
                "x12": { name: "Decoration", price: 100, img: "https://www.ikea.com/in/en/images/products/aeppelviken-chandelier-4-armed__0627387_PE693323_S5.JPG", stock: 100, count: 0 },
                "x13": { name: "Headphones", price: 200, img: "https://imgres.tailbase.com/rzdimg/prods/800/531721_1.jpg", stock: 100, count: 0 },
                "x14": { name: "Loafers", price: 300, img: "https://images-na.ssl-images-amazon.com/images/I/51i3YskwkTL._AC_UY500_.jpg", stock: 1, count: 0 },
                "x15": { name: "Wing Chair", price: 100, img: "https://www.ikea.com/in/en/images/products/strandmon-wing-chair__0690287_PE723209_S5.JPG", stock: 2, count: 0 },

            },
            total_cart_value: 0,
            search: '',
        }
    }

    addItemToCartHandler = (id) => {
        let products = { ...this.state.products };
        let item_to_add = { ...products[id] };
        item_to_add.stock = item_to_add.stock - 1
        item_to_add.count = item_to_add.count + 1

        if (item_to_add.stock === -1) {
            item_to_add = null
            alert("No Stock")
            return
        }
        else {
            products[id] = { ...item_to_add }
        }

        let cart_products = { ...this.state.cart_products }
        if(cart_products[id]) {
            item_to_add.count = cart_products[id].count + 1
        }
        cart_products[id] = item_to_add

        const amount = this.totalCartValue(cart_products)

        this.setState({
            cart_products: cart_products,
            products: products,
            total_cart_value: amount
        })
    }


    removeItemFromCart = (id) => {
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

    updateSearch(event) {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        let products = this.state.products
        let filtered_products = null
        let search_text = this.state.search

        filtered_products = (
            Object.keys(products).map(function (key) {
                if (products[key].name.toLowerCase().indexOf(search_text) !== -1) {
                    let data = {}
                    data[key] = products[key]
                    return data
                }
            })
        )

        return (
            <>
                <Navbar fixed="top" variant="dark" style={
                    {
                        height: "60px",
                        background: "black",
                        borderBottom: "2px solid white"
                    }}>
                    <Navbar.Brand href="#home" >
                        <h3>Black Spade</h3>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >Values</Nav.Link>
                        <Nav.Link >Pricing</Nav.Link>
                        <Nav.Link >About</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.search} onChange={this.updateSearch.bind(this)} style={{ float: "left" }} />
                    </Form>
                </Navbar>
                <Row style={{ marginTop: "60px" }}>
                    <Col sm={9}>
                        <Products products={filtered_products} click={this.addItemToCartHandler} > </Products>
                    </Col>
                    <Col sm={3} style={
                        {
                            background: "black",
                            height: "100%",
                        }}>
                        <Navbar variant="dark" style={
                            {
                                background: "black",
                                borderBottom: "1px solid white",
                                width: "96%"
                            }}>
                            <Navbar.Brand><h5>Black Bag</h5></Navbar.Brand>
                            <h6 style={
                                {
                                    color: "white",
                                    width: "80%",
                                    textAlign: "right",
                                    alignItems: "right"
                                }}>
                                &#8377; {this.state.total_cart_value}
                            </h6>

                        </Navbar>
                        <Cart cart_products={this.state.cart_products} click={this.removeItemFromCart}></Cart>
                    </Col>
                </Row>

            </>
        );
    }
}

export default Home;
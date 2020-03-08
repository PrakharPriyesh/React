import React, { Component } from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';

class Cart extends Component {

    render() {

        let items = null
        let cart_products = { ...this.props.cart_products };
        const fun = this.props.click

        items = (
            Object.keys(cart_products).map(function (key) {
                const element = cart_products[key]
                return (
                    <Card key={key} style={
                        {
                            minWidth: "150px",
                            maxWidth: "150px",
                            marginBottom: "15px"
                        }}>
                        <Card.Body>
                            <Card.Img variant="bottom" src={element.img} style={
                                {
                                    maxWidth: "auto",
                                    maxHeight: "80px",
                                    padding: "1px"
                                }}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }} />
                            <Card.Title style={
                                {
                                    fontSize: "15px",
                                    padding: "2px"
                                }}>
                                {element.name}
                            </Card.Title>
                            <Card.Text>
                                <b>Rs. {element.price} X {element.count}</b>
                            </Card.Text>
                            <Button variant="dark" onClick={() => fun(key)}>Remove</Button>
                        </Card.Body>
                    </Card>
                )
            })
        )
        return (
            <CardDeck style={{ marginTop: "15px" }}>
                {items}
            </CardDeck>
        );
    }
}

export default Cart;
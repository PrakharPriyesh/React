import React from 'react';
import './products.css'
//import { CardDeck, Card, Button } from 'react-bootstrap'

function Products(props) {

    let items = null
    let products = Object.assign({}, ...props.products);

    items = (
        Object.keys(products).map(function (key) {
            const element = products[key]
            // Did not create another component as css were different will learn to use relative dimensions
            return (
                <div className="product-card" key={key}>
                    <div className="product-body">
                        <img className="product-img" src={element.img} alt={element.img} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }} />
                        <div className="product-name">{element.name}</div>
                        <div className="product-text">
                            Rs. {element.price + " "} <br />
                            <font className="product-stock">Stock: {element.stock}</font>
                        </div>
                        <button className="product-button" onClick={props.click} id={key}>Add to Cart</button>
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

export default Products;
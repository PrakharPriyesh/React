import React from 'react';
import { ProductItem } from '.'

const ProductsContainer = ({ products, addItemToCartHandler, search }) => {
    let href = window.location.href.split("/")
    let sellerId = href[href.length - 1]
    if (window.location.href === ('http://localhost:3000/sellers/' + sellerId)) {
        products = Object.assign({}, ...products[sellerId]);
        const filteredProducts = (
            Object.keys(products).map((key) => {
                if (products[key].name.toLowerCase().indexOf(search) !== -1) {
                    let data = {};
                    data[key] = products[key];
                    return data;
                }
                return null;
            })
        )
        let items = null
        products = Object.assign({}, ...filteredProducts);
        items = (
            Object.keys(products).map((keys) => {
                const element = products[keys]
                return (
                    <ProductItem
                        key={keys}
                        uniqueKey={keys}
                        element={element}
                        sellerId={sellerId}
                        addItemToCartHandler={addItemToCartHandler}
                    />
                )
            })
        )

        return (
            <>
                {items}
            </>
        );

    }

    else {
        return <> </>
    }

}

export default ProductsContainer;
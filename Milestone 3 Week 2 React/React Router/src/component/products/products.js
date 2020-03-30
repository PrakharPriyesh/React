import React from 'react';
import { ProductsContainer } from './'

const Products = ({ products, addItemToCartHandler, search }) => {
    return (
        <>
            <ProductsContainer
                products={products}
                addItemToCartHandler={addItemToCartHandler}
                search={search}
            />
        </>
    );
}

export default Products;
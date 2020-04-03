import React from 'react';
import PropTypes from 'prop-types';
import { ProductsContainer } from './';

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

Products.propTypes = {
    products: PropTypes.object,
    addItemToCartHandler: PropTypes.func,
    search: PropTypes.string
}

export default Products;
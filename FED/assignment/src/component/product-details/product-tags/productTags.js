import React from 'react';

import './productTags.css';

const ProductTags = ({ textArr }) => {

    return (
        textArr.map((text, i) => {
            let productId = null
            if (i === 0) {
                productId = 'product-tag-first'
            }
            if (i === textArr.length - 1) {
                productId = 'product-tag-last'
            }
            return (
                < div id={productId} key={i} className="product-tag" >
                    <div className="product-tag-container">
                        {text}
                    </div>
                </div >
            )
        })
    );
}

export default ProductTags;
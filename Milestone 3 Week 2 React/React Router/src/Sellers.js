import React, { Component } from 'react';
import Navbar from './component/navbar'
import SellerList from './component/seller-list/sellerList'

class Sellers extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <SellerList/>
            </>
        );
    }
}

export default Sellers;
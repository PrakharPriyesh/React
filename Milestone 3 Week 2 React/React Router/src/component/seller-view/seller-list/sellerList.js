import React from 'react';
import { SellerCard } from '../'
import { sellerDetails } from '../../../utils'

const SellerList = () => {

    const getSellerCards = () => {
        let sellerList = (
            Object.keys(sellerDetails).map((key) => {
                return <SellerCard
                    key={key}
                    id={key}
                    name={sellerDetails[key].name}
                    contact={sellerDetails[key].contact}
                    address={sellerDetails[key].address}
                    icon={sellerDetails[key].icon}
                />
            })
        )
        return sellerList
    }

    let sellerList = getSellerCards()
    if (window.location.href === 'http://localhost:3000/sellers') {
        return (
            <div style={{ padding: "5px" }}>
                {sellerList}
            </div>
        );
    }
    else {
        return <></>
    }
}

export default SellerList;
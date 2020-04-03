import React from 'react';
import { SellerCard } from '..'
import { sellerDetails } from '../../../utils'

const SellerList = () => {
    return (
        <div>
            {Object.keys(sellerDetails).map((key) => {
                return <SellerCard
                    key={key}
                    id={key}
                    name={sellerDetails[key].name}
                    contact={sellerDetails[key].contact}
                    address={sellerDetails[key].address}
                    icon={sellerDetails[key].icon}
                    rating={sellerDetails[key].rating}
                />
            })
            }
        </div>
    );
}

export default SellerList;
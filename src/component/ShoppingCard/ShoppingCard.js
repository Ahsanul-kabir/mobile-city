import React from 'react';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShoppingCard = ({ cartItem, removeItem }) => {

    const { name } = cartItem
    return (
        <div className="card" style={{ width: "18rem", marginTop: "10px" }}>
            <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{name}</h5>
                <button onClick={() => removeItem(cartItem)} className="card-link btn btn-danger">
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
        </div>
    );
};

export default ShoppingCard;
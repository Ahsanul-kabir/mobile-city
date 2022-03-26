import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Mobile = ({ mobile }) => {
    const { name, img, price } = mobile
    console.log(img);
    return (
        <div className="card p-1 shadow-lg p-3 mb-5 bg-body rounded" style={{ width: "15rem", margin: '5px' }}>
            <img src={img} className="card-img-top h-75" alt={'Image can load'} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {price}</p>
                <a href="/" className="btn btn-info w-100">Take Now  <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </a>
            </div>
        </div>
    );
};

export default Mobile;
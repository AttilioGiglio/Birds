import React, { useEffect, useState } from "react";
import './Card.css';
import {Link} from 'react-router-dom';

// Fetch de una MATRIZ(empieza con[])

const Card = ({ images, names, uid }) => {

    let style = { width: "18rem", };

    return (
            <div className='d-inline-flex m-3'> 
                <div className="card" style={style}>
                    <img src={images}  className="bird card-img-top" alt="birds" />
                    <div className="card-body"> <h5 className="card-title">{names}</h5>
                        <button><Link to={`/detail/${uid}`}> See detail</Link> </button>
                    </div>
                </div>
            </div>
    );
};


export default Card;
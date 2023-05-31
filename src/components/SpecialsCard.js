import React from "react";
import { FiShoppingCart } from "react-icons/fi"

const SpecialsCard = (props) =>{
    return(
        <div className="specials-card" id={props.id}>
            <div style={{backgroundImage: `url(${props.source})`}} alt={props.imageAlt}></div>
            <div className="special-text">
                <p><strong>{props.header}</strong></p>
                <p><del>{props.originalPrice}</del> <span className="special-price">{props.price}</span></p>
                <p>{props.body}</p>
                <a href="#" className="card-footer-link" onClick={e=>e.preventDefault()}><button><FiShoppingCart/>&nbsp;&nbsp;Order Online</button></a>
            </div>
        </div>
    )
}

export default SpecialsCard;
import React from "react";

function Card({ title, price, rating, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title}/>
            <h3>{title}</h3>
            <p>￦ {price.toLocaleString()} / 1박</p>
            <p>★ {rating}</p>
        </div>
    );
}
    export default Card;
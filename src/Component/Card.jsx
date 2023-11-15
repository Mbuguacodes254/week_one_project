import React from 'react';
import './Card.css'; 

const Card = ({ bgColor, icon, title, description }) => {
return (
    <div className="card" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt={title} className="card-icon" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="learn-more">Learn More</button>
    </div>
);
};

export default Card;
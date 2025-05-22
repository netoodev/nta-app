import React from 'react';
import './infoCard.css';


const InfoCard = (props) => (
    <div className='info-card' style={props.style}>
      <div className='card-ic'>
        <img src={props.img} alt=''></img>   
      </div>
      <div className='card-info'>
        <p>{props.title}</p>
        <h4>{props.number}</h4>
      </div>
    </div>
);

export default InfoCard;
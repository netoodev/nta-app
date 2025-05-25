import React from 'react';
import './keyCard.css';


const KeyCardUser = (props) => (
    <div className='keycard'>
        <div className='key-user'>
            <div className='user-class'><p>{props.number}</p></div>
            <div className='key-user-img' style={{backgroundImage: `url(${props.img})`}}></div>
        </div>
        <div className='key-user-info'>
             <div className='key-user-info-top'>
                <span>Tipo</span>
                <p>{props.type}</p>
             </div>
             <div className='key-user-info-bottom'>
                <div className='key-user-info-right'>
                    <span>Número</span>
                    <p>{props.number}</p>
                </div>
                <div className='key-user-info-left'>
                    <span>Capacidade</span>
                    <p>{props.capacity} lugares</p>
                </div>
             </div>
        </div>
    </div>
);

export default KeyCardUser;
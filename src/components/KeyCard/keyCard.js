import React from 'react';
import './keyCard.css';


const KeyCard = (props) => (
    <div className='keycard'>
        <div className='key-user'>
            <div className='user-class'><p>1402</p></div>
            <img src={props.img} alt=''></img>
        </div>
        <div className='key-user-info'>
             <div className='key-user-info-top'>
                <span>{props.topSpan}</span>
                <p>{props.topP}</p>
             </div>
             <div className='key-user-info-bottom'>
                <div className='key-user-info-right'>
                    <span>{props.rightSpan}</span>
                    <p>{props.rightP}</p>
                </div>
                <div className='key-user-info-left'>
                    <span>{props.leftSpan}</span>
                    <p>{props.leftP}</p>
                </div>
             </div>
        </div>
    </div>
);

export default KeyCard;
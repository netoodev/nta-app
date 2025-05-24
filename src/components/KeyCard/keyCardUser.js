import React from 'react';
import './keyCard.css';


const KeyCardUser = (props) => (
    <div className='keycard'>
        <div className='key-user'>
            <div className='user-class'><p>{props.room}</p></div>
            <div className='key-user-img' style={{backgroundImage: `url(${props.img})`}}></div>
        </div>
        <div className='key-user-info'>
             <div className='key-user-info-top'>
                <span>Docente</span>
                <p>{props.name}</p>
             </div>
             <div className='key-user-info-bottom'>
                <div className='key-user-info-right'>
                    <span>Sala</span>
                    <p>{props.room}</p>
                </div>
                <div className='key-user-info-left'>
                    <span>Agendamento</span>
                    <p>{props.startHour} - {props.endHour}</p>
                </div>
             </div>
        </div>
    </div>
);

export default KeyCardUser;
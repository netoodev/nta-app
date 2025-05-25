import React from 'react';
import './actionCard.css';
import phoneIc from '../../img/phone-ic.svg';
import notifIc from '../../img/notif-ic.svg';


const ActionCard = (props) => (
    <div className='action-card'>
        <div className='action-btn'>
            <img src={phoneIc} alt=''></img>
        </div>
        <div className='action-btn'>
            <img src={notifIc} alt=''></img>
        </div>
        <div className='action-key-btn'>
            <p>Receber chave</p>
        </div>
    </div>
);

export default ActionCard;
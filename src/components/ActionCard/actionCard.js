import React from 'react';
import './actionCard.css';
import phoneIc from '../../img/phone-ic.svg';
import notifIc from '../../img/notif-ic.svg';


const ActionCard = (props) => (
    <div className='action-card-main'>
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
        <div className='room-info-card'>
            <div>
                <span>Tipo</span>
                <p>Laboratório Notebook</p>
            </div>
            <div>
                <div>
                    <span>Capacidade</span>
                    <p>25 lugares</p>
                </div>
                <div>
                    <span>Cód. Docente</span>
                    <p>100256325</p>
                </div>
            </div>
        </div>
    </div>
);

export default ActionCard;
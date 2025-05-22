import React from 'react';
import './keyCard.css';
import docenteProfilePic from '../../img/docente-profile-pic.png';


const KeyCard = (props) => (
    <div className='keycard'>
        <div className='key-user'>
            <div className='user-class'><p>1402</p></div>
            <img src={docenteProfilePic} alt=''></img>
        </div>
        <div className='key-user-info'>
             
        </div>
    </div>
);

export default KeyCard;
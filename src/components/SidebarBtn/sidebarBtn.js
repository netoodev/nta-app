import React from 'react';
import './sidebarBtn.css';

const SidebarBtn = (props) => (
    <div className='sidebar-btn'>
      <img className='btn-ic' src={props.src} alt=''></img>
      <div className='btn-description'>
        <p className='btn-title'>{props.title}</p>
        <p className='btn-p'>{props.description}</p>
      </div>
    </div>
);

export default SidebarBtn;
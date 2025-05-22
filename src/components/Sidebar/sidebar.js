import React from 'react';
import './sidebar.css';
import SidebarBtn from '../SidebarBtn/sidebarBtn';
import qrcodeIc from '../../img/qrcode-ic.svg';
import keyIc from '../../img/key-ic.svg';


const Sidebar= () => (
    <div className='sidebar'>
      <div class="container">
        <h1>NTA</h1>
        <SidebarBtn src={qrcodeIc} title="Autorizar Entrega" description="Leitor de QrCode"/>
        <SidebarBtn src={keyIc} title="Retirada por Código" description="Retirada de Chaves"/>
      </div>
    </div>
);

export default Sidebar;
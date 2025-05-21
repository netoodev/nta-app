import './App.css';
import SidebarBtn from './components/SidebarBtn/sidebarBtn';
import qrcodeIc from './img/qrcode-ic.svg';
import keyIc from './img/key-ic.svg';

function App() {
  return (
    <div className='sidebar'>
      <div class="container">
        <h1>NTA</h1>
        <SidebarBtn src={qrcodeIc} title="Autorizar Entrega" description="Leitor de QrCode"/>
        <SidebarBtn src={keyIc} title="Retirada por Código" description="Retirada de Chaves"/>
      </div>
    </div>
  );
}

export default App;

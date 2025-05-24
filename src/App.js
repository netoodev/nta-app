import './App.css';
import Header from './components/Header/header';
import InfoCard from './components/InfoCard/infoCard';
import Sidebar from './components/Sidebar/sidebar';
import profilePic from './img/profile-pic.jpg';
import keyUseIc from './img/key-use-ic.svg';
import reservedKeyIc from './img/reserved-key-ic.svg';
import openKeyIc from './img/open-key-ic.svg';
import KeyCardUser from './components/KeyCard/keyCardUser';
import docenteProfilePic from './img/docente-profile-pic.png';
import docenteProfilePic2 from './img/docente-profile-pic-2.jpg';
import docenteProfilePic3 from './img/docente-profile-pic-3.jpg';

function App() {
  const infoCardBlue = {
    backgroundColor: '#183363',
    border: "1px solid #0E1F3C",
    boxShadow: "0px 0px 2px 1px #00000005, 0px 32px 64px #0000000a"
  }

  const infoCardPurple = {
    backgroundColor: '#3B62A8',
    border: "1px solid #314F86",
    boxShadow: "0px 0px 2px 1px #00000005, 0px 32px 64px #0000000a"
  }

  const infoCardGreen = {
    backgroundColor: '#98D453',
    border: "1px solid #90C750",
    boxShadow: "0px 0px 2px 1px #00000005, 0px 32px 64px #0000000a"
  }
  
  return (
    <div className='main-container'>
      <Sidebar/>
      <div className='right-container'>
        <Header name='Patrick Ramos' function='Monitor de chaves' img={profilePic}/>
        <div className='content'>
          <div className='infocard-wrapper'>
            <InfoCard img={keyUseIc} style={infoCardBlue} title="Chaves Em Uso" number="01"/>
            <InfoCard img={reservedKeyIc} style={infoCardPurple} title="Chaves Reservadas" number="02"/>
            <InfoCard img={openKeyIc} style={infoCardGreen} title="Chaves em Aberto" number="102"/>
          </div>
          <div className="keys-content">
            <div className='top-divider'></div>
            <div className='keys-content-wrapper'>
              <div className='keys-content-section'>
                <h4 className='keys-content-section-title'>Chaves Em Uso</h4>
                <div className='keys-content-section-grid'>
                  <KeyCardUser img={docenteProfilePic} name="Patrícia R. Ramos Lima" room="1402" startHour="18:00" endHour="20:00"/>
                </div>
              </div>
              <div className='keys-content-section'>
                <h4 className='keys-content-section-title'>Chaves Reservadas</h4>
                <div className='keys-content-section-grid'>
                  <KeyCardUser img={docenteProfilePic2} name="Luana Cristina Silva S." room="1406" startHour="20:30" endHour="21:00"/>
                  <KeyCardUser img={docenteProfilePic3} name="Davi de Oliveira Paulo" room="1407" startHour="20:00" endHour="21:00"/>
                </div>
              </div>
              <div className='keys-content-section'>
                <h4 className='keys-content-section-title'>Chaves Em Aberto</h4>
                <div className='keys-content-section-grid'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

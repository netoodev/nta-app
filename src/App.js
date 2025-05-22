import './App.css';
import Header from './components/Header/header';
import InfoCard from './components/InfoCard/infoCard';
import Sidebar from './components/Sidebar/sidebar';
import profilePic from './img/profile-pic.jpg';
import keyUseIc from './img/key-use-ic.svg';
import reservedKeyIc from './img/reserved-key-ic.svg';
import openKeyIc from './img/open-key-ic.svg';
import KeyCard from './components/KeyCard/keyCard';
import docenteProfilePic from './img/docente-profile-pic.png';

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
                  <KeyCard img={docenteProfilePic} topSpan="Docente" topP="Patrícia R. Ramos Lima" rightSpan="Sala" rightP="1402" leftSpan="Agendamento" leftP="18:00 - 20:00"/>
              </div>
              <div className='keys-content-section'>
                  <h4 className='keys-content-section-title'>Chaves Reservadas</h4>

              </div>
              <div className='keys-content-section'>
                  <h4 className='keys-content-section-title'>Chaves Em Aberto</h4>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

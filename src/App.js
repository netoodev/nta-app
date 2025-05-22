import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import profilePic from './img/profile-pic.jpg';

function App() {
  return (
    <div className='main-container'>
      <Sidebar/>
      <Header name='Patrick Ramos' function='Monitor de chaves' img={profilePic}/>
    </div>
  );
}

export default App;

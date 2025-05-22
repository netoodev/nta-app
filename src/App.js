import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className='main-container'>
      <Sidebar/>
      <Header/>
    </div>
  );
}

export default App;

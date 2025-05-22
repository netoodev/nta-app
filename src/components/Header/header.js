import './header.css';
import notifIc from '../../img/notif-ic.svg';
import searchIc from '../../img/search-ic.svg';

function Header() {
  return (
    <div className='header'>
        <div>
            <input placeholder='Procure por uma sala, tipo ou capacidade'></input>
            <div className='notif-btn'>
                <img src={notifIc} alt=''></img>
            </div>
            <div></div>
            <div className='profile-btn'></div>
        </div>
    </div>
  );
}

export default Header;

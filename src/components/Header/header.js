import './header.css';
import notifIc from '../../img/notif-ic.svg';


function Header(props) {
  return (
    <div className='header'>
        <div>
            <div className="input">
              <input placeholder='Procure por uma sala, tipo ou capacidade'></input>
            </div>
            <div className='notif-btn'>
                <img src={notifIc} alt=''></img>
            </div>
            <div className='divider'></div>
            <div className='profile-btn'>
              <img src={props.img} alt=''></img>
              <div className='profile-name'>
                <h4>{props.name}</h4>
                <p>{props.function}</p>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Header;

import HEADERLOGO from '../../img/header-logo.png';
import POINT from '../../img/point.png';
import MenuNavigation from '../navigation/MenuNavigation';
import './header.css';

export default function Header() {
    return (
      <div className="container">
        <header className="header">
          <img className='imgLogo' src={HEADERLOGO} alt='img-logo' width='150px'/>
          <div className='place-time'>
            <p>Ежедневно с 9:00 до 21:00</p>
            <p><img className='point' src={POINT } alt='point' width="30px"/>г.Краснодар</p>
          </div>
          <MenuNavigation/>
          <a className="header-tel" href="tel:+79002902923">+7(900)290-29-23</a>
        </header>
      </div>
    )
}
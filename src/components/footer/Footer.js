import { Link } from "react-scroll";
import {menuData} from '../../components/navigation/menu.data';
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <a className="footer-text" href="tel:+79002902923">Связаться</a>
                {menuData.map(e => 
                    <Link 
                    className='footer-text' 
                    activeStyle={{boxShadow: '0px 0px 10px #f734969c', transform: 'scale(1.1)'}}
                    spy={true} 
                    to={e.id}                 
                    smooth={true}                    
                    offset={-70}
                    duration= {800}
                    key={e.id}>
                        {e.title}
                    </Link>
                )}
        </footer>
    )
}
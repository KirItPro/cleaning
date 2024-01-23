import { Link } from "react-scroll";
import { menuData } from './menu.data';
import './navigation.css';

export default function MenuNavigation() {
    // const menuData = [
    //     {id: 'promo', title: 'Главная'},
    //     {id: 'types', title: 'Виды работ'},
    //     {id: 'price', title: 'Цены'},
    //     {id: 'review', title: 'Отзывы'}
    // ]
    return(
        <nav className='nav-menu'>
            {menuData.map(e => 
                <Link 
                className='nav-menu_text' 
                activeClass='active_menu'
                spy={true} 
                to={e.id}                 
                smooth={true}                    
                offset={-70}
                duration= {800}
                key={e.id}>
                    {e.title}
                </Link>
            )}
        </nav>
)
}
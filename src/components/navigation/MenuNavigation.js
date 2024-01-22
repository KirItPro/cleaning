import { Link } from "react-scroll";
import './navigation.css';

export default function MenuNavigation() {
    const titleMenu = [
        {id: 'promo', title: 'Главная'},
        {id: 'types', title: 'Виды работ'},
        {id: 'price', title: 'Цены'},
        {id: 'review', title: 'Отзывы'}
    ]
    return(
        <nav className='nav-menu'>
            {titleMenu.map(e => 
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
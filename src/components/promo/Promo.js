import './promo.css';
import PROMO from '../../img/new-logo.png';

export default function Promo() {
    return (
        <div className='promo'>
        <div className='promo-img_bg'/>
        <img className='promo-img' src={PROMO} alt='promo-img'/>
        
        <div className='promo-bg'>
          <h1 className='promo-title'>клининг в краснодаре</h1>
          <a className='promo-button' href='https://api.whatsapp.com/send/?phone=79002902923&text&type=phone_number&app_absent=0'>Расчитать стоимость</a>
          <p className='promo-text'>Клининговые услуги по уборке квартир, коттеджей и офисов в Краснодаре.</p>
        </div>
      </div>
    )
}
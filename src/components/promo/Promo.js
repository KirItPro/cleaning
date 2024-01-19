
import PROMO from '../../img/bg-promo2.jpg';

export default function Promo() {
    return (
        <div className='promo'>
        <img className='promo-img' src={PROMO} alt='promo-img'/>
        <div className='promo-bg'>
          <h1 className='mainTitle'>клининг в краснодаре</h1>
          <button className='promo-button'>Расчитать стоимость</button>
          <p className='promo-text'>Клининговые услуги по уборке квартир, коттеджей и офисов в Краснодаре.</p>
        </div>
      </div>
    )
}
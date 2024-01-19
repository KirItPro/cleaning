
import LOGO from '../../img/new-logo.png';

export default function Info() {
    return (
        <div className='container'>
            <h2 >Наши преимущества</h2>
            <div className="info">
                <img className='info-img' src={LOGO} alt='logo-img'/>
                <div className='info-allblocks'>
                    <div className='info-block'>Бесплатный выезд для расчета стоимости!</div>
                    <div className='info-block'>Фиксированная цена без скрытых доплат!</div>
                    <div className='info-block'>Оплата только после выполнения работ!</div>
                    <div className='info-block'>Убираем быстро и качественно!</div>
                    <div className='info-block'>Hac рекомендуют друзьям!</div>
                    <div className='info-block'>Грязи не боимся, грязь боится нас!</div>
                </div>
            </div>
        </div>

    )
}
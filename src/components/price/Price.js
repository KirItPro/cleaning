import './price.css';
import { dataPrice } from "./price.data";
// import PRICE from '../../img/sale.jpg';

export default function Price() {
    return (
        <div className='container'>
            <h2>Стоимость наших услуг</h2>
            <div className="price-block">
            {/* <img className='price-img' src={PRICE} alt="sale" /> */}
                
                <div className='price-block_renge'>
                    {dataPrice.map(dat => 
                        <div>
                            <h3 >{dat.title}</h3> 
                            <ul  className="price-block_unit">
                                {dat.service.map(serv => <li className='price-text'>{'📎 ' + serv}</li>)}
                            </ul>
                        </div>
                        
                    )} 
 
                </div>

            </div>
        </div>
    )
}
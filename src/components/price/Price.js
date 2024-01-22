import { dataPrice } from "./price.data";
import './price.css';

export default function Price({props}) {
    return (
        <div className='container' id='price'>
            <h2>Стоимость наших услуг</h2>
            <div className="price-block">                
                <div className='price-block_renge'>
                    {dataPrice.map(dat => 
                        <div key={`${dat.title}`}>
                            <h3 >{dat.title}</h3> 
                            <ul  className="price-block_unit">
                                {dat.service.map((serv,i) => <li className='price-text' key={`li${i}`}>{'📎 ' + serv}</li>)}
                            </ul>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    )
}
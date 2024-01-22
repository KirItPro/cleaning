import { useState } from 'react';

import { types } from './types.data';
import CITCHEN from '../../img/kitchen-cleaning.jpeg';
import BADROOM from '../../img/badroom.jpg';
import BATHROOM from '../../img/bathroom.jpeg';
import BALCONY from '../../img/balcony.jpg';

import './types.css';

export default function Types() {
    const [isActive, setActive] = useState('active');
    const [isTarget, setTarget] = useState(0);
    const type = types[isTarget];
    const dataBtn = [{id: 0, text: 'обычная'}, {id: 1, text: 'уборка после ремонта'},{id: 2, text: 'генеральная'}]
    const objEntries = Object.entries(type.rooms);
    const imgArr = [CITCHEN, BADROOM, BATHROOM, BALCONY]

    function activeStandart(e) {
        e.preventDefault();
        if (isActive === 'active') {
            setTarget(Number(e.target.id));
            setActive('active');
        } else {
            setTarget(0);
            setActive('none');
        };  
    }

    return (
        <div className='container' id='types'>
            <h2>Виды уборок</h2>
            <div className="types">
                <div className="types-buttons">
                    {dataBtn.map((btn,i) => 
                        <button id={Number(btn.id)} 
                            style={btn.id === type.id ? {boxShadow: '0px 0px 20px #f734969c', transform: 'scale(1.1)', borderColor: "#3a3a39e5"} : {}}
                            className= 'types-work_button'
                            onClick={activeStandart}
                            key={`bt${i}`}>
                                {btn.text}
                        </button>)}
                </div>

                <div className={isActive}>
                    {objEntries.map((el,i) => (
                        ((i+1) % 2 === 0) ? 
                        <div key={`t${i}`}>
                            <h3>{type.title[i] ? type.title[i] : ''}</h3>
                            <div className='types-room'>
                                <ul className='types-room_select'>
                                    {objEntries[i][1].map((el,i) => (<li key={`l${i}`}>{el}</li>))}
                                </ul>
                                <img className='types-img' src={imgArr[i] ? imgArr[i] : ''} alt={`img${i}` }></img>
                            </div>
                        </div> :
                        <div key={`t${i}`}>
                            <h3>{type.title[i] ? type.title[i] : ''}</h3>
                            <div className='types-room'>                                    
                                <img className='types-img' src={imgArr[i] ? imgArr[i] : ''} alt={`img${i}` }></img>
                                <ul className='types-room_select'>
                                    {objEntries[i][1].map((el,i) => (<li key={`lin${i}`}>{el}</li>))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
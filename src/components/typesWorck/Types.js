import { useState } from 'react';
import './types.css';
import { types } from './types.data';
import CITCHEN from '../../img/kitchen-cleaning.jpeg';
import BADROOM from '../../img/badroom.jpg';
import BATHROOM from '../../img/bathroom.jpeg'

export default function Types() {
    const [isActive, setActive] = useState('active');
    // const [isActiveBatton, setActiveBatton] = useState('')
    const [isTarget, setTarget] = useState(0);
    const type = types[isTarget];
    const dataBtn = [{id: 0, text: 'генеральная'}, {id: 1, text: 'уборка после ремонта'},{id: 2, text: 'обычная'}]
    const objEntries = Object.entries(type.rooms);
    const imgArr = [CITCHEN, BADROOM, BATHROOM]

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
        <div className='container'>
            <h2>Виды уборок</h2>
            <div className="types">

                <div className="types-buttons">
                    {dataBtn.map(btn => 
                        <button id={Number(btn.id)} className={'types-work_button'} onClick={activeStandart} >
                            {btn.text}
                        </button>)}
                </div>

                <div className={isActive}>
                    {objEntries.map((el,i) => ( 
                        <>
                        <h3>{type.title[i] ? type.title[i] : ''}</h3>
                        <div className='types-room'>
                            <ul className='types-room_select'>
                                {objEntries[i][1].map(el => (<li>{el}</li>))}
                            </ul>
                            <img className='types-img' src={imgArr[i] ? imgArr[i] : ''} alt={`img${i}` }></img>
                        </div>
                        </>
                    ))}
                </div>

            </div>
        </div>
    )
}
import { useState } from 'react';
import { types } from './types.data';
import CITCHEN from '../../img/kitchen-cleaning.jpeg';
import BADROOM from '../../img/badroom.jpg';
import BATHROOM from '../../img/bathroom.jpeg'

export default function Types() {
    const [isActive, setActive] = useState('active');
    const [isActiveBatton, setActiveBatton] = useState('types-work_button')
    const [isTarget, setTarget] = useState(0);
    const type = types[isTarget];
    const dataBtn = [{id: 0, text: 'генеральная'}, {id: 1, text: 'уборка после ремонта'},{id: 2, text: 'обычная'}]
    // let allRooms = Object.keys(type.rooms);
    function activeStandart(e) {
        e.preventDefault();
        if (isActive === 'active') {
            setTarget(Number(e.target.id));
            setActive('active');
            // console.log(type.id)
        } else {
            setTarget(0);
            setActive('none');
        };
    }

    return (
        <div className='container'>
            <h2>Виды уборок</h2>
            <div className="types" key={Math.random()}>

                <div className="types-buttons">
                    {dataBtn.map(btn => 
                        <button id={Number(btn.id)} className='types-work_button' onClick={activeStandart}>
                            {btn.text}
                        </button>)}
                </div>

                <div className={isActive}>
                    <h3>{type.rooms.kitchen ? type.title[0]: console.log(`Не отображаю заголовок ${type.title[0]}`)}</h3>
                    {/* {console.log(allRooms[0])} */}
                    <div className='types-room'>
                        <ul>
                            {type.rooms.kitchen ? type.rooms.kitchen.map(e => <li>{e}</li>): console.log('Нет раздела')}
                        </ul>
                        <img className='types-img' src={CITCHEN} alt='citchen'></img>
                    </div>
                    
                    <h3>{type.rooms.badroom ? type.title[1]: console.log(`Не отображаю заголовок ${type.title[1]}`)}</h3>
                    <div className='types-room'>
                        <img className='types-img' src={BADROOM} alt='badroom'></img>
                        <ul>
                            {type.rooms.badroom ? type.rooms.badroom.map(e => <li>{e}</li>): console.log('Нет раздела')}
                        </ul>
                    </div>

                    
                    <h3>{type.rooms.bathroom ? type.title[2]: console.log(`Не отображаю заголовок ${type.title[2]}`)}</h3>
                    <div className='types-room'>
                        <ul>
                            {type.rooms.bathroom ? type.rooms.bathroom.map(e => <li>{e}</li>): console.log('Нет раздела')}
                        </ul>
                        <img className='types-img' src={BATHROOM} alt='bathroom'></img>
                    </div>


                    <h3>{type.rooms.balcony ? type.title[3]: console.log(`Не отображаю заголовок ${type.title[3]}`)}</h3>
                    <ul>
                        {type.rooms.balcony ? type.rooms.balcony.map(e => <li>{e}</li>): console.log('Нет раздела')}
                    </ul>
                </div>

            </div>
        </div>
    )
}
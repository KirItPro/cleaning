import { useRef } from 'react';
import LEFT from '../../img/left-e.png';
import RIGHT from '../../img/right-e.png';
import { examplesImg } from './example.data';
import './examples.css';

export default function Examples() {
    let imgExContainerRef = useRef(null)
    const prev = () => imgExContainerRef.current.scrollLeft -= 400;
    const next = () => imgExContainerRef.current.scrollLeft += 400;

    return (
        <div className='container'>
            <h2>Примеры работ</h2>
            <div className='examples'>
                <img className='examples-vector' src={LEFT} onClick={prev}  alt='ex-p'/>
                    <div className='examples-slide_all' ref={imgExContainerRef}>
                    {examplesImg.map(img => <img className='examples-slide' src={img}  alt='ex-sl' key={`i${img}`}/>)}
                    </div>
                <img className='examples-vector' src={RIGHT} onClick={next}  alt='ex-n'/>
            </div>
        </div>
    )
} 
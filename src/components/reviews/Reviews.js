import { useRef } from 'react';
import LEFT from '../../img/left.png';
import RIGHT from '../../img/right.png';
import { dataImgRew } from './reviews.data';
import './reviews.css';

export default function Reviews() {
    let imgContainerRef = useRef(null)
    const prev = () => imgContainerRef.current.scrollLeft -= 400;
    const next = () => imgContainerRef.current.scrollLeft += 400;

    return (
        <div className='container'>
            <h2>Отзывы</h2>
            <div className='review'>
                <img className='review-vector' src={LEFT} onClick={prev}  alt='rev-p'/>
                    <div className='review-slide_all' ref={imgContainerRef}>
                    {dataImgRew.map(img => <img className='review-slide' src={img} alt='rev-sl'/>)}
                    {console.log(imgContainerRef)}
                    </div>
                <img className='review-vector' src={RIGHT} onClick={next} alt='rev-n'/>
            </div>
        </div>
    )
} 
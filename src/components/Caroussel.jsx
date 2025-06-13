import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useEffect, useState } from 'react';
function Caroussel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setCurrentIndex(0)
        }
    }
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        } else {
            setCurrentIndex(length - 1)
        }
    }
    useEffect(() => {
        setLength(children.length)
    }, [children])

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {length > 1 ? <button className="left-arrow" onClick={prev}>
                    <ArrowLeft />
                </button> : ''}
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                {length > 1 ? <button className="right-arrow" onClick={next}>
                    <ArrowRight />
                </button> : ''}

                {length > 1 ? <div className='current-state'>{`${currentIndex + 1} / ${length}`}</div> : ''}
            </div>
        </div>
    )
}

export default Caroussel;
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import './slider.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const contentStyle = {
    margin: 0,
    height: '100%',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff'
};
const sliderItems = [
    {
        id: 1,
        imageUrl: 'https://cdn.galaxycine.vn/media/2023/8/31/combo299k-transdd-digital-2048x682_1693497430601.jpg',
        path: ''
    },
    {
        id: 2,
        imageUrl: 'https://cdn.galaxycine.vn/media/2023/8/22/zalopay-1_1692686936988.jpg',
        path: ''
    },
    {
        id: 3,
        imageUrl: 'https://cdn.galaxycine.vn/media/2023/9/12/after-sundown-5_1694507238820.jpg',
        path: ''
    },
    {
        id: 4,
        imageUrl: 'https://cdn.galaxycine.vn/media/2023/9/4/the-nun-2-4_1693796380775.jpg',
        path: ''
    },
    {
        id: 5,
        imageUrl: 'https://cdn.galaxycine.vn/media/2023/9/8/2048x682_1694155905949.jpg',
        path: ''
    }
]
const Slider = () => {
    const carouselRef = useRef(null);

    const HandleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    }

    const HandlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    }
    return (
        <section className='slider'>
            <button className='slider__button--prev' onClick={HandlePrev}> <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '40px', color: '#c5cad3' }} /> </button>
            <button className='slider__button--next' onClick={HandleNext}> <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '40px', color: '#c5cad3' }} /> </button>
            <Carousel ref={carouselRef} dotPosition='bottom' autoplay autoplaySpeed={2000} infinite>
                {
                    sliderItems.map(items => (
                        <div key={items.id}>
                            <img style={contentStyle} src={items.imageUrl} />
                        </div>
                    ))
                }
            </Carousel>


            {/* <div className='slider__form'>
                    <div className='container'>
                        <h2 className='slider__form--title'>Mua vé nhanh</h2>

                    </div>
                </div> */}
        </section>
    );
};
export default Slider;
import React, { memo, useRef } from 'react';

import { Carousel, ConfigProvider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { sliderItems } from '../../Constant/sliderItems';
import TicketQuickly from '../TicketQuickly/TicketQuickly';

import './carousel.scss'

const Caurosel = () => {
    const carouselRef = useRef(0);

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
        <div className='slider flex flex-col justify-center relative max-[1024px]:static'>
            <div className='slider__content relative'>
                <button className='slider__button--prev absolute z-10 h-full px-2 max-[768px]:hidden' onClick={HandlePrev}> <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '40px', color: '#c5cad3' }} /> </button>
                <button className='slider__button--next absolute z-10 h-full px-2 right-0 max-[768px]:hidden' onClick={HandleNext}> <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '40px', color: '#c5cad3' }} /> </button>

                <Carousel className="custom-3d-carousel" ref={carouselRef} dotPosition='bottom' >
                    {
                        sliderItems.map(items => (
                            <div className='custom-3d-carousel-item text-center w-full px-[50px]' key={items.id} >
                                <img  src={items.imageUrl} />
                            </div>
                        ))
                    }
                </Carousel>

            </div>
            <TicketQuickly />
        </div>
    );
};
export default memo(Caurosel);
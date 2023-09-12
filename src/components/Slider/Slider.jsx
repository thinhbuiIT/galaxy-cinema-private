import React from 'react';
import { Carousel } from 'antd';
import './slider.scss'

const contentStyle = {
    margin: 0,
    height: '500px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
};
const Slider = () => {
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
    return (
        <section className='slider'>
            <Carousel dotPosition='bottom' autoplay autoplaySpeed={2000} infinite>
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
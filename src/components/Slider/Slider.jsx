import React from 'react';
import { Carousel } from 'antd';
import './_slider.scss'

const contentStyle = {
    margin: 0,
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
};
const Slider = () => {

    return (
        <section className='slider'>
            <Carousel dotPosition='bottom' autoplay autoplaySpeed={2000} infinite>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </section>
    );
};
export default Slider;
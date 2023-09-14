import React from 'react'
import { Tabs } from 'antd';
import FilmShowing from './FilmShowing/FilmShowing';
import FilmCommingSoon from './FilmCommingSoon/FilmCommingSoon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './tabfilm.scss'

const items = [
    {
        key: '1',
        label: 'Phim đang chiếu',
        children: <FilmShowing />,
    },
    {
        key: '2',
        label: 'Phim sắp chiếu',
        children: <FilmCommingSoon />,
    }
]

export default function TabFilm() {
    return (
        <section className='tabFilm'>
            <div className='container flex flex-col justify-start'>
                <Tabs defaultActiveKey="1" items={items} />
                <button className='tabFilm__button mt-5'>Xem Thêm <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </section>
    )
}

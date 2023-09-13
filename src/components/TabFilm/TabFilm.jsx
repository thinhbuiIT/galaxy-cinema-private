import React from 'react'
import { Tabs } from 'antd';

import './tabfilm.scss'
import FilmShowing from './FilmShowing/FilmShowing';
import FilmCommingSoon from './FilmCommingSoon/FilmCommingSoon';

    
const items = [
    {
        key: '1',
        label: 'Theo Phim',
        children: <FilmShowing />,
    },
    {
        key: '2',
        label: 'Theo Rạp',
        children: <FilmCommingSoon />,
    }
]
export default function TabFilm() {
    return (
        <section className='tabFilm'>
            <div className='container flex flex-col justify-start'>
                <Tabs defaultActiveKey="1" items={items} />
                <button className='tabFilm__button'>Xem Thêm</button>
            </div>
        </section>
    )
}

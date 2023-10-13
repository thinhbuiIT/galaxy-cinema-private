import React from 'react'
import { Tabs } from 'antd';
import FilmShowing from './FilmShowing/FilmShowing';
import FilmCommingSoon from './FilmCommingSoon/FilmCommingSoon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './tabfilm.scss'
import { Link } from 'react-router-dom';

export default function TabFilm(props) {
    const { film } = props
    const items = [
        {
            key: '1',
            label: 'Phim đang chiếu',
            children: <FilmShowing countRender={film} />,
        },
        {
            key: '2',
            label: 'Phim sắp chiếu',
            children: <FilmCommingSoon countRender={film} />,
        }
    ]
    return (
        <section className='tabFilm'>
            <div className='container flex flex-col justify-start'>
                <Tabs defaultActiveKey="1" items={items} />
                {
                    film && <Link className='tabFilm__button mt-5' to={'all-phim'}>
                        Xem Thêm <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                }
            </div>
        </section>
    )
}

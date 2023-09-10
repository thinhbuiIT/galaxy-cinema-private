import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './tabfilm.scss'
import { fetchFilmCommingSoonStart } from '../../redux/Film/commingSoonSlice';
import { fetchFilmShowingStart } from '../../redux/Film/showingSlice';

export default function TabFilm() {
    const filmCommingSoon = useSelector(state => state.filmCommingSoon)
    const filmShowing = useSelector(state => state.filmShowing)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilmCommingSoonStart())
        dispatch(fetchFilmShowingStart())
    }, [dispatch])

    console.log('filmShowing : ', filmShowing);
    console.log('filmCommingSoon : ', filmCommingSoon);

    return (
        <section className='tabFilm'>
            <div className='container'>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Phim Đang Chiếu" key="1">
                        <div className='showing'>
                            {filmShowing.loading === true && <div>...Loading</div>}
                            {
                                filmShowing.data.map(film => (
                                    <div className='showing__film'>
                                        <img className='showing__film--image' src={film.imageLandscape} alt="image" />
                                        <h2 className='showing__film--title'>{film.name}</h2>
                                        <p className='showing__film--paragraph'>{film.subName}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Phim Sắp Chiếu" key="2">
                        <div className='showing'>
                            {filmCommingSoon.loading === true && <div>...Loading</div>}
                            {
                                filmCommingSoon.data.map(film => (
                                    <div className='showing__film'>
                                        <img className='showing__film--image' src={film.imageLandscape} alt="image" />
                                        <h2 className='showing__film--title'>{film.name}</h2>
                                        <p className='showing__film--paragraph'>{film.subName}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </Tabs.TabPane>
                </Tabs>
                <button className='tabFilm__button'>Xem Thêm</button>
            </div>
        </section>
    )
}

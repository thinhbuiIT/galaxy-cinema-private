import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './ticketByFilm.scss'
import { fetchSearchFilm, fetchSearchFilmById } from '../../../services/movieApi';


export default function TicketByFilm() {
    const film = useSelector(state => state.film.data.data?.movieShowing)
    const [listThreate, setListThreate] = useState([])

    const HandleThreate = async (id) => {
        const response = await fetchSearchFilm(id)
        const response1 = await fetchSearchFilmById(id)
        setListThreate(response.data)
        console.log('listThreate : ', listThreate);
        console.log('response1 : ', response1.data);
    }

    return (
        <div className='ticketByFilm flex justify-between gap-5'>
            <div className='ticketByFilm__film flex flex-col w-1/3'>
                <div className='ticketByFilm__film--title'>
                    <h2>Chọn phim</h2>
                </div>
                <ul className='ticketByFilm__film--list'>
                    {
                        film?.map(film => (
                            <li onClick={() => HandleThreate(film.id)} className='list__block flex ' key={film.id}>
                                <img src={film.imageLandscape} alt="image" />
                                <div className='list__block--content'>
                                    <h2>{film.name}</h2>
                                    <p>{film.subName}</p>
                                </div>
                                <div className='list__block--age'>
                                    <span >T{film.age}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='ticketByFilm__cinema flex flex-col w-1/3'>
                <h2 className='ticketByFilm__film--title'>Chọn rạp</h2>
                <ul className='ticketByFilm__film--list'>
                    {
                        listThreate?.length === 0
                            ?
                            <li className='list__block'>
                                <h2 className='list__block--title'>Vui lòng chọn rạp</h2>
                            </li>
                            :
                            listThreate?.map(threate => (
                                <li className='list__block' key={threate.id}>
                                    <h2 className='list__block--title'>{threate.name}</h2>
                                </li>
                            ))
                    }
                </ul>
            </div>
            <div className='ticketByFilm__time flex flex-col w-1/3'>
                <h2 className='ticketByFilm__film--title'>Chọn suất</h2>
                <ul className='ticketByFilm__film--list'>
                    {
                        listThreate?.length === 0
                            ?
                            <li className='list__block'>
                                <h2 className='list__block--title'>Vui lòng chọn suất</h2>
                            </li>
                            :
                            listThreate?.map(threate => (
                                <li className='list__block' key={threate.id}>
                                    <h2 className='list__block--title'>{threate.name}</h2>
                                </li>
                            ))
                    }
                </ul>
            </div>
        </div >
    )
}

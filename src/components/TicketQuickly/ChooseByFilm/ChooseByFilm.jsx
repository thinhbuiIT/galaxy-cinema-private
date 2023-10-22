import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'

export default function ChooseByFilm() {
    const film = useSelector(state => state.film.data.data?.movieShowing)
    const cinemaByFilm = useSelector(state => state.cinemaByFilm.data)
    const [day, setDay] = useState([])
    const dispatch = useDispatch()

    const HandleFetchCinemas = (id) => {
        dispatch({ type: 'FETCH_CINEMA_BY_FILM', payload: id })
    }
    const HandleGetDay = (id) => {
        setDay(cinemaByFilm.filter(film => (film.id === id)).map(items => items.dates))
    }
    const HandleGetTime = (dates) => {
        // console.log('OUTPUT : ', dates);
        // day[0].filter(dates => )
    }
    // console.log('cinemaByFilm : ', cinemaByFilm);
    return (
        <div className="flex flex-wrap h-full">
            <select className="h-full outline-none overflow-y-scroll w-[200px]" onChange={HandleFetchCinemas}>
                <option hidden value="" key="">
                    Chọn phim
                </option>
                {
                    film?.map(items => <option key={items.id} className="m-[20px]" value={items.id}>{items.name}</option>)
                }
            </select>
            <select className="h-full outline-none overflow-y-scroll w-[200px]" onChange={HandleGetDay}>
                <option hidden value="" key="">Chọn Rạp</option>
                {
                    cinemaByFilm?.map(items => <option key={items.id} className="m-[20px]" value={items.id}>{items.name}</option>)
                }
            </select>
            <select className="h-full outline-none overflow-y-scroll w-[200px]" onChange={HandleGetTime}>
                <option hidden value="" key="">Chọn Ngày</option>
                {
                    day[0]?.map((items, index) => <option key={index} className="m-[20px]" value={items.id}>{items.dayOfWeekLabel + ' ' + items.showDate}</option>)
                }
            </select>
            <select className="h-full outline-none overflow-y-scroll w-[200px]" onChange={HandleGetTime}>
                <option hidden value="" key="">Chọn Suất</option>
                {/* {
                                day[0]?.map((items, index) => <option key={index} className="m-[20px]" value={items.id}>{items.dayOfWeekLabel + ' ' + items.showDate}</option>)
                            } */}
            </select>
        </div>
    )
}

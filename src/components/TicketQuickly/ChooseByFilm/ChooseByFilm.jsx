import { Select } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
        console.log('OUTPUT : ', dates);
        // day[0].filter(dates => )
    }
    console.log('cinemaByFilm : ', cinemaByFilm);
    return (
        <div className='flex flex-col gap-4'>
            <Select
                defaultValue="Chọn Phim"
                style={{ width: 330 }}
                onChange={HandleFetchCinemas}
                options={film?.map(items => ({ value: items.id, label: items.name }))}
            />
            <Select
                defaultValue="Chọn Rạp"
                style={{ width: 330 }}
                onChange={HandleGetDay}
                options={cinemaByFilm?.map(items => ({ value: items.id, label: items.name }))}
            />
            <Select
                defaultValue="Chọn Ngày"
                style={{ width: 330 }}
                onChange={HandleGetTime}
                options={day[0]?.map(items => ({ value: items.showDate, label: items.dayOfWeekLabel + ' ' + items.showDate }))}
            />
            <Select
                defaultValue="Chọn Suất"
                style={{ width: 330 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
        </div>
    )
}

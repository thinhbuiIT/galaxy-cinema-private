import { Select } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChooseByFilm() {
    const film = useSelector(state => state.film.data.data?.movieShowing)
    const cinemaByFilm = useSelector(state => state.cinemaByFilm)
    // const [list]
    const dispatch = useDispatch()

    const HandleFetchCinemas = (id) => {
        dispatch({ type: 'FETCH_CINEMA_BY_FILM', payload: id })

    }
    console.log('OUTPUT : ', cinemaByFilm);
    return (
        <div className='flex flex-col gap-4'>
            <Select
                defaultValue="Chọn Phim"
                style={{ width: 330 }}
                onChange={(value) => HandleFetchCinemas(value)}
                options={film?.map(items => ({ value: items.id, label: items.name }))}
            />
            <Select
                defaultValue="Chọn Rạp"
                style={{ width: 330 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
            <Select
                defaultValue="Chọn Ngày"
                style={{ width: 330 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
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

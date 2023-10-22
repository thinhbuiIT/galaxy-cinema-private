import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChooseByFilm from "./ChooseByFilm/ChooseByFilm";

import './ticketQuickly.scss'

const items = [
    {
        key: '1',
        label: 'Theo Phim',
        children: <ChooseByFilm />,
    }
];

function TicketQuickly() {
    const film = useSelector(state => state.film.data.data?.movieShowing)
    const cinemaByFilm = useSelector(state => state.cinemaByFilm.data)
    const [day, setDay] = useState([])
    const dispatch = useDispatch()

    const HandleFetchCinemas = (e) => {
        dispatch({ type: 'FETCH_CINEMA_BY_FILM', payload: e.target.value })
    }
    const HandleGetDay = (e) => {
        setDay(cinemaByFilm.filter(film => (film.id === e.target.value)).map(items => items.dates))
    }
    const HandleGetTime = (dates) => {
    }
    return (
        <div className="flex justify-center w-full">
            <div className="container flex justify-center">
                <div className="box-buy-ticket flex items-center h-[56px] bg-white absolute bottom-[-5%] max-[768px]:hidden shadow-xl">
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
                    <div className="flex justify-end h-full">
                        <button className="box-buy-ticket__button uppercase">Mua Vé Nhanh</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TicketQuickly
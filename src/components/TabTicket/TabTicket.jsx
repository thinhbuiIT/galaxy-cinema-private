import React from 'react'
import { Tabs } from 'antd';
import TicketByCinema from './TicketByCinema/TicketByCinema';
import TicketByFilm from './TicketByFilm/TicketByFilm';

import './tabTicket.scss'

const items = [
    {
        key: '1',
        label: 'Theo Phim',
        children: <TicketByFilm />,
    },
    {
        key: '2',
        label: 'Theo Rạp',
        children: <TicketByCinema />,
    }
];

export default function TabTicket() {
    return (
        <div className='ticket flex justify-center'>
            <div className='container'>
                <Tabs defaultActiveKey="1" items={items} />
            </div>
        </div>
    )
}

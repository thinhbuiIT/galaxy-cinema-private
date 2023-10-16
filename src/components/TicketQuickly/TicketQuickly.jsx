import { Tabs } from "antd"
import ChooseByFilm from "./ChooseByFilm/ChooseByFilm";
import ChooseByDay from "./ChooseByDay/ChooseByDay";
import ChooseByCinema from "./ChooseByCinema/ChooseByCinema";
import './ticketQuickly.scss'


const items = [
    {
        key: '1',
        label: 'Theo Phim',
        children: <ChooseByFilm />,
    },
    {
        key: '2',
        label: 'Theo Ngày',
        children: <ChooseByDay />,
    },
    {
        key: '3',
        label: 'Theo Rạp',
        children: <ChooseByCinema />,
    },
];

function TicketQuickly() {
    return (
        <div className="flex justify-center ">
            <div className="container">
                <div className="box-buy-ticket absolute top-[13%] right-[5%] max-[1024px]:static">
                    <div className="flex justify-start">
                        <h2 className="box-buy-ticket__title uppercase">Mua Vé Nhanh</h2>
                    </div>
                    <Tabs defaultActiveKey="1" items={items} />
                    <div className="flex justify-end p-3">
                        <button className="box-buy-ticket__button uppercase">Mua Vé</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TicketQuickly
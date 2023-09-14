import React from 'react';
import { Link } from 'react-router-dom';
import { faCaretDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './navbar.scss';

const menu = [
    {
        id: 1,
        title: "Mua vé",
        path: "/lich-chieu",
        icon: ''
    },
    {
        id: 2,
        title: "Phim",
        path: "",
        icon: <FontAwesomeIcon icon={faCaretDown} />
    },
    {
        id: 3,
        title: "góc điện ảnh",
        path: "",
        icon: <FontAwesomeIcon icon={faCaretDown} />
    },
    {
        id: 4,
        title: "sự kiện",
        path: "",
        icon: <FontAwesomeIcon icon={faCaretDown} />
    },
    {
        id: 5,
        title: "rạp/giá vé",
        path: "",
        icon: ''
    },
    {
        id: 6,
        title: "Hỗ trợ",
        path: "",
        icon: ''
    },
    {
        id: 7,
        title: "thành viên",
        path: "",
        icon: ''
    }
]

export default function Navbar() {
    return (
        <div className='navbar'>
            <section className='navbar__head'>
                <div className='container'>
                    <div className='navbar__logo'>
                        <Link to={'/'}><img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" /></Link>
                    </div>
                    <div className='navbar__search'>
                        <div className='navbar__search--content'>
                            <input type="text" placeholder='Tìm tên phim, diễn viên' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#c5cad3", }} />
                        </div>
                    </div>
                    <div className='navbar__option '>
                        <div className='navbar__option--login flex items-center'>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#c5cad3", }} />
                            <span className='ml-1'>Đăng nhập</span>
                        </div>
                        <div className='navbar__option--i8vn'>
                            <a href="">VN</a>
                            <a href="">EN</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='navbar__bot flex justify-center'>
                <div className='container'>
                    <ul className='flex justify-between items-center'>
                        {
                            menu.map(item => (<li className='navbar__bot--item' key={item.id}><Link to={item.path}><span className='mr-1'>{item.title}</span>
                                {item.icon}
                            </Link></li>))
                        }
                    </ul>
                </div>
            </section>

        </div>
    )
}

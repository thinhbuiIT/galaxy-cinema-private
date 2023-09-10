import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const menu = [
    {
        id: 1,
        title: "Mua vé",
        path: ""
    },
    {
        id: 2,
        title: "Phim",
        path: ""
    },
    {
        id: 3,
        title: "góc điện ảnh",
        path: ""
    },
    {
        id: 4,
        title: "sự kiện",
        path: ""
    },
    {
        id: 5,
        title: "rạp/giá vé",
        path: ""
    },
    {
        id: 6,
        title: "Hỗ trợ",
        path: ""
    },
    {
        id: 7,
        title: "thành viên",
        path: ""
    }
]

export default function Navbar() {
    return (
        <div className='navbar'>
            <section className='navbar__head'>
                <div className='container'>
                    <div className='navbar__logo'>
                        <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" />
                    </div>
                    <div className='navbar__search'>
                        <div className='navbar__search--content'>
                            <input type="text" placeholder='Tìm tên phim, diễn viên' />
                            <img src="" alt="icon" />
                        </div>
                    </div>
                    <div className='navbar__option'>
                        <div className='navbar__option--login'>
                            <img src="" alt="icon" />
                            <span>Đăng nhập</span>
                        </div>
                        <div className='navbar__option--i8vn'>
                            <a href="">VN</a>
                            <a href="">EN</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='navbar__bot'>
                <div className='container'>
                    <ul>
                        {
                            menu.map(item => (<li className='navbar__bot--item' key={item.id}><Link to={item.path}><span>{item.title}</span></Link></li>))
                        }
                    </ul>
                </div>
            </section>

        </div>
    )
}

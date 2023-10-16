import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faCaretDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
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
        path: "/all-film",
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

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    console.log('isOpen : ', isOpen);
    return (
        <div className='navbar'>
            <section className='navbar__head flex justify-center h-[5rem] bg-white'>
                <div className='container flex items-center justify-between'>
                    <div className='navbar__logo'>
                        <Link to={'/'}><img className='w-[22.5rem] max-[768px]:w-[18rem] p-4' src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="" /></Link>
                    </div>
                    <div className='navbar__search h-[2rem] max-[768px]:hidden'>
                        <div className='navbar__search--content flex items-center p-[.2rem 1rem] '>
                            <input className='outline-none ' type="text" placeholder='Tìm tên phim, diễn viên' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#c5cad3", }} />
                        </div>
                    </div>
                    <div className='navbar__option flex items-center gap-2 text-[.9rem] max-[768px]:hidden'>
                        <div className='navbar__option--login flex items-center'>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#c5cad3", }} />
                            <span className='ml-1'>Đăng nhập</span>
                        </div>
                        <div className='navbar__option--i8vn'>
                            <a href="">VN</a>
                            {/* <span>|</span> */}
                            <a href="">EN</a>
                        </div>
                    </div>
                    <div className='navbar__head hidden max-[768px]:block'>
                        <button className='relative z-50' onClick={() => setIsOpen(pre => !pre)}><FontAwesomeIcon icon={faBars} size='2xl' /></button>
                        <div className={`absolute left-0 z-10 h-[50vh] w-full bg-white bg-opacity-90 ${isOpen ? 'block' : 'hidden'}`}>
                            <ul className="flex flex-col items-end p-5 justify-between space-x-4 h-full">
                                <li className="text-black"><Link onClick={() => setIsOpen(pre => !pre)} to="/" >Trang Chủ</Link></li>
                                <li className="text-black"><Link onClick={() => setIsOpen(pre => !pre)} to="/lich-chieu" >Mua Vé</Link></li>
                                <li className="text-black"><Link onClick={() => setIsOpen(pre => !pre)} to="/all-film" >Tất Cả Phim</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='navbar__bot flex justify-center p-3 max-[768px]:hidden'>
                <div className='container'>
                    <ul className='flex justify-between items-center '>
                        {
                            menu.map(item => (<li className='navbar__bot--item text-center text-white bold uppercase w-full p-[.8rem 1rem]' key={item.id}><Link to={item.path}><span className='mr-1'>{item.title}</span>
                                {item.icon}
                            </Link></li>))
                        }
                    </ul>
                </div>
            </section>

        </div>
    )
}
export default memo(Navbar)
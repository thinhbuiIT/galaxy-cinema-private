import React, { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { faBars, faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, } from 'antd';

import logo from '../../assets/logo.jpg';
import buyTicket from '../../assets/btn-ticket.jpg';
import ModalLogin from '../ModalLogin/ModalLogin';

import { menuItems } from '../../Constant/menuItems';

import './header.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (    
        <div className='header h-[115px]'>
            <section className='header__head flex justify-center h-full bg-white'>
                <div className='container flex items-center justify-between'>

                    <div className='header__logo flex items-center'>
                        <Link to={'/'}>
                            <img className='h-[60px] w-full' src={logo} alt="" />
                        </Link>
                        <img className='w-[112px] h-[36px] ml-7' src={buyTicket} alt="" />
                    </div>

                    <div className='header__list flex items-center justify-center '>
                        <div className='header__list--menu w-[400px] h-full max-[768px]:hidden'>
                            <Menu style={{ width: '100%' }} mode="horizontal" items={menuItems}/>
                        </div>
                    </div>

                    <div className='header__option flex items-center gap-2 text-[.9rem] max-[768px]:hidden'>
                        <div className='header__option--search'>
                            <Link>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
                            </Link>
                        </div>
                        <div className='header__option--login flex items-center'>
                            <span className='cursor-pointer mx-1' onClick={() => setIsModalOpen(pre => !pre)}>Đăng nhập</span>
                        </div>
                        <div className='header__option--img'>
                            <img src="https://www.galaxycine.vn/_next/static/media/join-Gstar.24c52de9.svg" alt="" />
                        </div>
                    </div>

                    <div className='header__head hidden max-[768px]:block'>
                        <button
                            className='relative z-50'
                            onClick={() => setIsOpen(pre => !pre)}
                        >
                            <FontAwesomeIcon icon={faBars} size='2xl' />
                        </button>
                        <div className={`absolute z-10 h-[100vh] w-[70%] right-0 bg-white bg-opacity-90 ${isOpen ? 'block' : 'hidden'}`}>
                            <ul className="flex flex-col items-end p-5 justify-between space-x-4 h-full">
                                <li className="text-black">
                                    <Link onClick={() => setIsOpen(pre => !pre)} to="/" >Trang Chủ</Link>
                                </li>
                                <li className="text-black">
                                    <Link onClick={() => setIsOpen(pre => !pre)} to="/lich-chieu" >Mua Vé</Link>
                                </li>
                                <li className="text-black">
                                    <Link onClick={() => setIsOpen(pre => !pre)} to="/all-film" >Tất Cả Phim</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <ModalLogin isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    )
}
export default memo(Header)
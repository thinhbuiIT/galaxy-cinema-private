import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import { faBars, faCaretDown, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, Menu, } from 'antd';

import logo from '../../assets/logo.jpg';
import buyTicket from '../../assets/btn-ticket.jpg';
import ModalLogin from '../ModalLogin/ModalLogin';

import { menuItems } from '../../Constant/menuItems';

import './header.scss';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='header h-[115px]'>
            <section className='header__head flex justify-center h-full bg-white'>
                <div className='container flex items-center justify-between '>

                    <div className='header__logo flex items-center'>
                        <Link to={'/'}>
                            <img className='h-[60px] w-full max-[768px]:h-[40px]' src={logo} alt="" />
                        </Link>
                        <img className='w-[112px] h-[36px] ml-7 max-[768px]:p-1' src={buyTicket} alt="" />
                    </div>

                    <div className='header__list flex items-center justify-center '>
                        <div className='header__list--menu w-[400px] h-full max-[768px]:hidden'>
                            <Menu style={{ width: '100%' }} mode="horizontal" items={menuItems} />
                        </div>
                    </div>

                    <div className='header__option flex items-center gap-2 text-[.9rem] '>
                        <div className='header__option--search max-[768px]:hidden'>
                            <Link>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
                            </Link>
                        </div>
                        <div className='header__option--login flex items-center'>
                            <div className='hidden max-[768px]:block'><FontAwesomeIcon icon={faUser} size='lg' /></div>
                            <span className='cursor-pointer mx-1' onClick={() => setIsModalOpen(pre => !pre)}>Đăng nhập</span>
                        </div>
                        <div className='header__option--img max-[768px]:hidden'>
                            <img src="https://www.galaxycine.vn/_next/static/media/join-Gstar.24c52de9.svg" alt="" />
                        </div>
                    </div>

                    <div className='header__head hidden max-[768px]:block'>
                        <button
                            className='relative z-50'
                            onClick={showDrawer}
                        >
                            <FontAwesomeIcon icon={faBars} size='2xl' style={{ color: "#b1bac9", }} />
                        </button>

                        <Drawer title="Galaxy Cinema" placement="right" onClose={onClose} open={open}>
                            <div className='flex h-[30px] justify-start items-center border border-gray-300 p-2 rounded-[5px]'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} size='sm' style={{ color: "#b1bac9", }} />
                                <input className='outline-none border-none px-1' type="text" placeholder='Tìm kiếm' />
                            </div>
                            <div className='flex justify-center items-center p-2'>
                                <img className='w-[85px] h-[27px]' src={buyTicket} alt="" />
                                <img className='w-[85px] h-[27px]' src="https://www.galaxycine.vn/_next/static/media/join-Gstar.24c52de9.svg" alt="" />
                            </div>
                            <Menu style={{ width: '100%' }} mode="inline" items={menuItems} />
                        </Drawer>
                    </div>

                </div>
            </section>
            <ModalLogin isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    )
}
export default memo(Header)
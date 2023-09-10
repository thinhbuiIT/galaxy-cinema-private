import React from 'react'
import { Tabs } from 'antd';
import './tabfilm.scss'

export default function TabFilm() {

    return (
        <section className='tabFilm'>
            <div className='container'>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Phim Đang Chiếu" key="1">
                        <div className='showing'>
                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/9/2/450_1693671073683.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/9/2/450_1693671073683.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/9/2/450_1693671073683.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/9/2/450_1693671073683.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/9/2/450_1693671073683.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/9/2/450_1693671073683.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Phim Sắp Chiếu" key="2">
                        <div className='showing'>
                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/8/28/equalizer-2_1693210805079.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/8/28/equalizer-2_1693210805079.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/8/28/equalizer-2_1693210805079.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/8/28/equalizer-2_1693210805079.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/8/28/equalizer-2_1693210805079.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>

                            <div className='showing__film'>
                                <img className='showing__film--image' src="https://cdn.galaxycine.vn/media/2023/8/28/equalizer-2_1693210805079.jpg" alt="image" />
                                <h2 className='showing__film--title'>THE NUN II</h2>
                                <p className='showing__film--paragraph'>ÁC QUỶ MA SƠ II</p>
                            </div>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
                <button className='tabFilm__button'>Xem Thêm</button>
            </div>
        </section>
    )
}

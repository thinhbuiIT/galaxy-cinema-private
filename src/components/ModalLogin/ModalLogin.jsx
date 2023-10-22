import { memo } from 'react'
import { Modal, Tabs } from 'antd'
import Login from './Login/Login';
import Register from './Register/Register';


function ModalLogin({ isModalOpen, setIsModalOpen }) {

    const items = [
        {
            key: 1,
            label: 'Đăng nhập',
            children: <Login setIsModalOpen={setIsModalOpen}/>
        },
        {
            key: 2,
            label: 'Đăng ký',
            children: <Register setIsModalOpen={setIsModalOpen}/>
        }
    ]

    return (
        <>
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(pre => !pre)}
                footer=''
            >
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={items}
                />
            </Modal>
        </>
    )
}
export default memo(ModalLogin)
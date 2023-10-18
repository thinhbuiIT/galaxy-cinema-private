import { memo } from 'react'
import { Modal, Tabs } from 'antd'
import Login from './Login/Login';
import Register from './Register/Register';

const items = [
    {
        key: 1,
        label: 'Đăng nhập',
        children: <Login />
    },
    {
        key: 2,
        label: 'Đăng ký',
        children: <Register />
    }
]

function ModalLogin({ isModalOpen, setIsModalOpen }) {
    return (
        <>
            <Modal
                open={isModalOpen}
                // onOk={() => setIsModalOpen(pre => !pre)}
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
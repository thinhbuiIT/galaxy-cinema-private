import { Select } from 'antd'
import React from 'react'

export default function ChooseByDay() {
    return (
        <div className='flex flex-col gap-4'>
            <Select
                defaultValue="Chọn Ngày"
                style={{ width: 330 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
            <Select
                defaultValue="Chọn Rạp"
                style={{ width: 330 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
            <Select
                defaultValue="Chọn Phim"
                style={{ width: 330 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'L Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, illum.' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />


            <Select
                defaultValue="Chọn Suất"
                style={{ width: 330 }}
                // onChange={handleChange}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
        </div>
    )
}

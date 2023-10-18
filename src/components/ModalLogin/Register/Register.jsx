import { memo } from 'react'

function Register() {
    return (
        <div className='register flex flex-col gap-4'>
            <div className='register__username flex flex-col'>
                <label htmlFor='username'>UserName </label>
                <input required id='username' className='outline-none p-1 border-2 border-gray' type="text" placeholder='User name' />
            </div>
            <div className='register__password flex flex-col'>
                <label htmlFor='password'>Password </label>
                <input required id='password' className='outline-none p-1 border-2 border-gray' type="password" placeholder='Password' />
            </div>
            <div className='register__cfpassword flex flex-col'>
                <label htmlFor='cfpassword'>Confirm Password </label>
                <input required id='cfpassword' className='outline-none p-1 border-2 border-gray' type="password" placeholder='Confirm Password' />
            </div>
        </div>
    )
}
export default memo(Register)
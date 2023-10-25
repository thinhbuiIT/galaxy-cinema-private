import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from 'react-router-dom'


function Booking() {
    const booking = useSelector(state => state.booking.listBooking)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch({ type: 'GET_BOOKING' })
    }, [])

    console.log('booking : ', booking);
    console.log('location : ', location.state);
    return (
        <div className='booking'>

        </div>
    )
}
export default memo(Booking)
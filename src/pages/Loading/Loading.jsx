import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
    return (
        <div className='bg-transparent bg-opacity-80 flex items-center justify-center h-[100vh] w-full'>
            <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
        </div>
    )
}

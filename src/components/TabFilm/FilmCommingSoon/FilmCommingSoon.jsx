import { memo } from "react"
import { useSelector } from "react-redux"
import '../tabfilm.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
function FilmCommingSoon(props) {
    const { countRender } = props
    const film = useSelector(state => state.film.data.data?.movieCommingSoon)
    return (
        <div className='showing flex justify-between flex-wrap w-full'>
            {
                !countRender ?
                    film?.map(film => (
                        <div className='showing__film p-3 w-1/4 cursor-pointer max-[768px]:w-1/2' key={film.id}>
                            <div className="showing__film--movie">
                                <img className='showing__film--image' src={film.imagePortrait} alt="image" />
                                <div className="showing__film--hover flex flex-col gap-3 justify-center items-center">
                                    <button className="px-6 py-3 uppercase p-3">Mua vé</button>
                                    <button className="px-6 py-3 uppercase p-3">Trailer</button>
                                </div>
                                <div className='showing__film--point absolute right-4 bottom-10 z-10'> 
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faStar} style={{color: "#ddfa00",}} />
                                        <p className="text-white font-bold">{(film.point).toFixed(1)}</p>
                                    </div>
                                    <p className="absolute text-white right-0 bg-[#F58020] rounded-[5px] p-1">{('T' + film.age).toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="showing__film--title">
                                <h2 className='uppercase'>{film.name}</h2>
                                <p className='showing__film--paragraph uppercase font-medium'>{film.subName}</p>
                            </div>
                        </div>
                    )) :
                    film?.slice(0, countRender).map(film => (
                        <div className='showing__film p-3 w-1/4 cursor-pointer max-[768px]:w-1/2' key={film.id}>
                            <div className="showing__film--movie">
                                <img className='showing__film--image' src={film.imagePortrait} alt="image" />
                                <div className="showing__film--hover flex flex-col gap-3 justify-center items-center">
                                    <button className="px-6 py-3 uppercase p-3">Mua vé</button>
                                    <button className="px-6 py-3 uppercase p-3">Trailer</button>
                                </div>
                                <div className='showing__film--point absolute right-4 bottom-10 z-10'> 
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faStar} style={{color: "#ddfa00",}} />
                                        <p className="text-white font-bold">{(film.point).toFixed(1)}</p>
                                    </div>
                                    <p className="absolute text-white right-0 bg-[#F58020] rounded-[5px] p-1">{('T' + film.age).toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="showing__film--title">
                                <h2 className='uppercase'>{film.name}</h2>
                                <p className='showing__film--paragraph uppercase font-medium'>{film.subName}</p>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}
export default memo(FilmCommingSoon)
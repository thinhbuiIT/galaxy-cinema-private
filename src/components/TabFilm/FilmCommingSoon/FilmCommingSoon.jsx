import { memo } from "react"
import { useSelector } from "react-redux"
import '../tabfilm.scss'
function FilmCommingSoon(props) {
    const { countRender } = props
    const film = useSelector(state => state.film)
    return (
        <div className='showing flex justify-between flex-wrap w-full'>
            {
                !countRender ?
                    film.data.data?.movieCommingSoon.map(film => (
                        <div className='showing__film p-3 w-1/4 cursor-pointer max-[768px]:w-1/2' key={film.id}>
                            <div className="showing__film--movie">
                                <img className='showing__film--image' src={film.imagePortrait} alt="image" />
                                <div className="showing__film--hover flex flex-col gap-3 justify-center items-center">
                                    <p>{'T' + film.age}</p>
                                    <button className="px-6 py-3 uppercase p-3">Mua vé</button>
                                </div>
                            </div>
                            <div className="showing__film--title">
                                <h2 className='uppercase'>{film.name}</h2>
                                <p className='showing__film--paragraph uppercase font-medium'>{film.subName}</p>
                            </div>
                        </div>
                    )) :
                    film.data.data?.movieCommingSoon.slice(0, countRender).map(film => (
                        <div className='showing__film p-3 w-1/3 cursor-pointer max-[768px]:w-1/2' key={film.id}>
                            <div className="showing__film--movie">
                                <img className='showing__film--image' src={film.imageLandscape} alt="image" />
                                <div className="showing__film--hover flex flex-col gap-3 justify-center items-center">
                                    <p>{'T' + film.age}</p>
                                    <button className="px-6 py-3 uppercase p-3">Mua vé</button>
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
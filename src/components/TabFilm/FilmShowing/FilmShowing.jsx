import { useSelector } from "react-redux"
import '../tabfilm.scss'

function FilmShowing() {
    const film = useSelector(state => state.film)

    return (
        <>
            <div className='showing'>
                {
                    film.data.data?.movieShowing.slice(0, 6).map(film => (
                        <div className='showing__film' key={film.id}>
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
        </>
    )
}
export default FilmShowing
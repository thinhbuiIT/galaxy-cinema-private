import { Tabs } from "antd"
import { useSelector } from "react-redux"

function FilmCommingSoon() {
    const film = useSelector(state => state.film)
    console.log(film);
    return (
        <>
            <Tabs.TabPane tab="Phim Sắp Chiếu" key="2">
                <div className='showing'>
                    {
                        film.data.data?.movieCommingSoon.map(film => (
                            <div className='showing__film' key={film.id}>
                                <img className='showing__film--image' src={film.imageLandscape} alt="image" />
                                <h2 className='showing__film--title'>{film.name}</h2>
                                <p className='showing__film--paragraph'>{film.subName}</p>
                            </div>
                        ))
                    }
                </div>
            </Tabs.TabPane>
        </>
    )
}
export default FilmCommingSoon
import { Tabs } from "antd"
import { useSelector } from "react-redux"

function FilmShowing() {
    const film = useSelector(state => state.film)

    return (
        <>
            {film?.loading === true && <div>...Loading</div>}
            <Tabs.TabPane tab="Phim Đang Chiếu" key="1">
                <div className='showing'>
                    {
                        film.data.data?.movieShowing.slice(0, 6).map(film => (
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
export default FilmShowing
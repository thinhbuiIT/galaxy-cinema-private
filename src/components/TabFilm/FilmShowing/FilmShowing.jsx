import { memo } from "react"
import { useSelector } from "react-redux"
import '../tabfilm.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import BlockFilm from "../BlockFilm/BlockFilm"

function FilmShowing(props) {
    const { countRender } = props
    const film = useSelector(state => state.film.data.data?.movieShowing)

    return (
        <div className='showing flex justify-between flex-wrap w-full'>
            {
                !countRender ?
                    film?.map(film => (
                        <BlockFilm key={film.id} film={film}/>
                    )) :
                    film?.slice(0, countRender).map(film => (
                        <BlockFilm key={film.id} film={film}/>
                    ))
            }
        </div>
    )
}
export default memo(FilmShowing)
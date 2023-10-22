import { memo } from "react"
import { useParams } from "react-router-dom"

function DetailFilm() {
    const { slug } = useParams()
    
    console.log('DetailFilm : ',slug);

    return (
        <div className="detail_film h-full w-full">
            <div className="relative bg-black flex justify-center items-center">
                <div className="">

                </div>
            </div>
        </div>
    )
}
export default memo(DetailFilm)
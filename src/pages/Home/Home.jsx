import React from 'react'
import Slider from '../../components/Slider/Slider'
import TabFilm from '../../components/TabFilm/TabFilm'
import Blog from '../../components/Blog/Blog'

export default function Home() {
    return (
        <div>
            <Slider />
            <TabFilm />
            <Blog />
        </div>
    )
}

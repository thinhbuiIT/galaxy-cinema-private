import React from 'react'
import Slider from '../../components/Slider/Slider'
import TabFilm from '../../components/TabFilm/TabFilm'
import Blog from '../../components/Blog/Blog'

export default function Home() {
    return (
        <div>
            <Slider />
            <TabFilm film={6} />
            <Blog />
        </div>
    )
}

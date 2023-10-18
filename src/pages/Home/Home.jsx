import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import TabFilm from '../../components/TabFilm/TabFilm'
import Blog from '../../components/Blog/Blog'

export default function Home() {
    return (
        <div>
            <Carousel />
            <TabFilm film={8} />
            <Blog />
        </div>
    )
}

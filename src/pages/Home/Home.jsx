import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Slider from '../../components/Slider/Slider'
import TabFilm from '../../components/TabFilm/TabFilm'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <TabFilm />
        </div>
    )
}

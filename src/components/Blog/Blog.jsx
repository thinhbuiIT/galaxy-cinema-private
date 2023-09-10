import React from 'react'
import './blog.scss'

export default function Blog() {
    return (
        <div className='blog flex justify-center'>
            <div className='container flex justify-between'>
                <div className='blog__comment'>
                    <h2>Bình Luận Phim</h2>
                    <article className='blog__comment--block'>

                    </article>
                </div>
                <div className='blog__media'>
                    <h2>BLOG ĐIỆN ẢNH</h2>
                </div>
            </div>
        </div>
    )
}

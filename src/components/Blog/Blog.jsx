import React from 'react'
import './blog.scss'

export default function Blog() {
    const blogComment = [
        {
            id: 1,
            title: '[Review] The Nun 2: Valak Đã "Ngủ Yên"?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/9/10/450_1694285055248.jpg',
            paragraph: 'The Nun 2 có thể xem là bản nâng cấp hoàn hảo từ phần đầu tiên. U ám hơn, đáng sợ hơn, quỷ quyệt hơn.',
            likes: 171,
            views: 1356,
            rating: 8.6,
            binding: 228
        },
        {
            id: 2,
            title: '[Review] The Nun 2: Valak Đã "Ngủ Yên"?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/9/10/450_1694285055248.jpg',
            paragraph: 'The Nun 2 có thể xem là bản nâng cấp hoàn hảo từ phần đầu tiên. U ám hơn, đáng sợ hơn, quỷ quyệt hơn.',
            likes: 171,
            views: 1356,
            rating: 8.6,
            binding: 228
        },
        {
            id: 3,
            title: '[Review] The Nun 2: Valak Đã "Ngủ Yên"?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/9/10/450_1694285055248.jpg',
            paragraph: 'The Nun 2 có thể xem là bản nâng cấp hoàn hảo từ phần đầu tiên. U ám hơn, đáng sợ hơn, quỷ quyệt hơn.',
            likes: 171,
            views: 1356,
            rating: 8.6,
            binding: 228
        },
        {
            id: 4,
            title: '[Review] The Nun 2: Valak Đã "Ngủ Yên"?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/9/10/450_1694285055248.jpg',
            paragraph: 'The Nun 2 có thể xem là bản nâng cấp hoàn hảo từ phần đầu tiên. U ám hơn, đáng sợ hơn, quỷ quyệt hơn.',
            likes: 171,
            views: 1356,
            rating: 8.6,
            binding: 228
        }
    ]
    const blogMedia = [
        {
            id: 1,
            title: 'Valak Đã "Đại Náo" Phòng Vé Ra Sao?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/8/24/450_1692894947945.jpg',
            paragraph: 'The Nun 2 đang rất được kỳ vọng sẽ “càn quét” phòng vé Việt và lập nên nhiều thành tích ấn tượng mới.',
            likes: 110,
            views: 932,
        },
        {
            id: 2,
            title: 'Valak Đã "Đại Náo" Phòng Vé Ra Sao?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/8/24/450_1692894947945.jpg',
            paragraph: 'The Nun 2 đang rất được kỳ vọng sẽ “càn quét” phòng vé Việt và lập nên nhiều thành tích ấn tượng mới.',
            likes: 110,
            views: 932,
        },
        {
            id: 3,
            title: 'Valak Đã "Đại Náo" Phòng Vé Ra Sao?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/8/24/450_1692894947945.jpg',
            paragraph: 'The Nun 2 đang rất được kỳ vọng sẽ “càn quét” phòng vé Việt và lập nên nhiều thành tích ấn tượng mới.',
            likes: 110,
            views: 932,
        },
        {
            id: 4,
            title: 'Valak Đã "Đại Náo" Phòng Vé Ra Sao?',
            imageUrl: 'https://cdn.galaxycine.vn/media/2023/8/24/450_1692894947945.jpg',
            paragraph: 'The Nun 2 đang rất được kỳ vọng sẽ “càn quét” phòng vé Việt và lập nên nhiều thành tích ấn tượng mới.',
            likes: 110,
            views: 932,
        }
    ]
    return (
        <div className='blog flex justify-center'>
            <div className='container flex gap-8'>
                <section className='blog__comment flex flex-col w-1/2 gap-7'>
                    <h1 className='blog__comment--title pb-5'>BÌNH LUẬN PHIM</h1>
                    {
                        blogComment.map(blog => (
                            <article className='blog__comment--block my-2 flex gap-3 w-full' key={blog.id}>
                                <div className='block__image'>
                                    <img className='image' src={blog.imageUrl} alt={blog.title} />
                                </div>
                                <div className='block__content'>
                                    <h2 className='block__content--title'>{blog.title}</h2>
                                    <ul className='block__content--icon flex py-2'>
                                        <li className='likes'><button>Thích {blog.likes}</button></li>
                                        <li className='eyes'><button>Eyes {blog.views}</button></li>
                                        <li className='rating'><button>Star {blog.rating + '/10'} ({blog.binding})</button></li>
                                    </ul>
                                    <p className='block__content--paragraph pt-3'>{blog.paragraph}</p>
                                </div>
                            </article>
                        ))
                    }
                </section>
                <section className='blog__comment flex flex-col w-1/2 gap-7'>
                    <h1 className='blog__comment--title pb-5'>blog điện ảnh</h1>
                    {
                        blogMedia.map(blog => (
                            <article className='blog__comment--block my-2 flex gap-3 w-full' key={blog.id}>
                                <div className='block__image'>
                                    <img className='image' src={blog.imageUrl} alt={blog.title} />
                                </div>
                                <div className='block__content'>
                                    <h2 className='block__content--title'>{blog.title}</h2>
                                    <ul className='block__content--icon flex py-2'>
                                        <li className='likes'><button>Thích {blog.likes}</button></li>
                                        <li className='eyes'><button>Eyes {blog.views}</button></li>
                                    </ul>
                                    <p className='block__content--paragraph pt-3'>{blog.paragraph}</p>
                                </div>
                            </article>
                        ))
                    }
                </section>
            </div>
        </div >
    )
}

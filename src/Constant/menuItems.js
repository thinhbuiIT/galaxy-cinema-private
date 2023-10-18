export const menuItems = [
    {
        label: 'Phim',
        path: '/all-film',
        key: 'movie',
        children: [
            {
                type: 'text',
                label: 'Phim Đang Chiếu',
                key: 'movie/1'
            },
            {
                type: 'text',
                label: 'Phim Sắp chiếu',
                key: 'movie/2'
            },
        ]
    },
    {
        label: 'Góc - điển ảnh',
        key: 'blog',
        children: [
            {
                type: 'text',
                label: 'Thể loại phim',
                key: 'blog/1'
            },
            {
                type: 'text',
                label: 'Diễn viên',
                key: 'blog/2'
            },
            {
                type: 'text',
                label: 'Đạo diễn',
                key: 'blog/3'
            },
            {
                type: 'text',
                label: 'Bình luận viên',
                key: 'blog/4'
            },
            {
                type: 'text',
                label: 'Blog điện ảnh',
                key: 'blog/5'
            },
        ],
    },
    {
        label: 'Sự kiện',
        key: 'promotion',
        children: [
            {
                type: 'text',
                label: 'Ưu đãi',
                key: 'promotion/1'
            },
            {
                type: 'text',
                label: 'Phim hay tháng',
                key: 'promotion/2'
            },
        ]
    },
    {
        label: 'Rạp/Giá Vé',
        key: 'booking',
    }
];
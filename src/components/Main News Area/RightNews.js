import packagesData from './RightMainNewsData';
import RightMainNews from './RightMainNews';

export default function RightNews() {
    const rightNewsInfo = packagesData.map((news) => {
        return (
            <RightMainNews
                rPic={news.newsPic}
                rLink={news.newsLink}
                rCat={news.newsCat}
                rCatLink={news.newsCatLink}
                rTitle={news.newsTitle}
                rTime={news.newsTime}
                rDate={news.newsDate}
            />
        )
    })

    return (
        <aside className="top-right-aside">
            <div className='main-news-right-aside-wrapper'>
                {rightNewsInfo}
            </div>
        </aside>
    )
}

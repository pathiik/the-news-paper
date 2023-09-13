import packagesData from './LeftMainNewsData';
import LeftMainNews from './LeftMainNews';

export default function LeftNews() {
    const leftNewsInfo = packagesData.map((news) => {
        return (
            <LeftMainNews
                lPic={news.newsPic}
                lLink={news.newsLink}
                lCat={news.newsCat}
                lCatLink={news.newsCatLink}
                lTitle={news.newsTitle}
                lAuthor={news.newsAuthor}
                lAuthorLink={news.newsAuthorLink}
                lContent={news.newsConent}
                lLikes={news.newsLikes}
                lComments={news.newsComments}
            />
        )
    })

    return (
        <aside className='top-left-aside'>
            <div className='main-news-left-aside-wrapper'>
                {leftNewsInfo}
            </div>
        </aside>
    )
}
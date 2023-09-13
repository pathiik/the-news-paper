import PopularNewsData from "./PopularNewsData";
import PopularNews from "./PopularNews";

export default function PopularNewsLeft() {
    const popularNewsInfo = PopularNewsData.map((news) => {
        return (
            <PopularNews
                pic={news.img}
                link={news.link}
                cat={news.cat}
                catLink={news.catLink}
                title={news.title}
                likes={news.likes}
                comments={news.comments}
            />
        )
    })

    return (
        <div className="popular-left-aside-news">
            {popularNewsInfo}
        </div>
    )
}
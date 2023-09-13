import InfoNewsData from "./InfoNewsData";
import InfoNews from "./InfoNews";

export default function InfoNewsRight() {
    const infoNewsInfo = InfoNewsData.map((news) => {
        return (
            <InfoNews
                num={news.num}
                title={news.title}
                link={news.link}
                date={news.date}
            />
        )
    })

    return (
        <div className="info-right-aside-news-in">
            {infoNewsInfo}
        </div>
    )
}

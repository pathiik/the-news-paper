export default function InfoNews(props) {
    return (
        <div className="info-news-in-news-area">
            <p className="info-news-in-news-num">{props.num}</p>
            <div className="info-news-in-news-info">
                <a href={props.link}><h4>{props.title}</h4></a>
                <p>{props.date}</p>
            </div>
        </div>
    )
}
export default function RightMainNewsNews(props) {
    return (
        <div className="main-news-right-in-box">

            <a href="#">
                <img className="main-news-right-in-img" src={`Assets/Main News Assets${props.rPic}`} alt="News Image" />
            </a>

            <div className="main-news-right-in-info">
                <a href={props.rCatLink} className="main-news-right-in-info-cat"><p>{props.rCat}</p></a>
                <a href={props.rLink} className="main-news-right-in-info-title"><h4>{props.rTitle}</h4></a>
                <p className="main-news-right-in-info-more">{props.rTime} | {props.rDate}</p>
            </div>

        </div>
    )
}

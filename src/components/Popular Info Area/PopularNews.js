export default function PopularNews(props) {
    return (
        <div className="popular-left-news-in">

            <a className="popular-left-news-img" href={props.link}><img src={`Assets/Popular Info Area Assets${props.pic}`} alt="News Image" /></a>
            <a className="popular-left-news-cat" href={props.catLink}><p>{props.cat}</p></a>
            <h2 className="popular-left-news-title">{props.title}</h2>

            <div className="popular-left-news-reviews">
                <a href="#">
                    <i className="fa-regular fa-thumbs-up" style={{ color: '#828282' }}></i>
                    <span>{props.likes}</span>
                </a>
                <a href="#">
                    <i class="fa-regular fa-comment" style={{ color: '#828282' }}></i>
                    <span>{props.comments}</span>
                </a>
            </div>

        </div>
    )
}
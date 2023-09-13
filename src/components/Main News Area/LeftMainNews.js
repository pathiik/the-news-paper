export default function LeftMainNews(props) {
    console.log(props);
    return (
        <div className="main-news-left-in-box">

            <a className="main-news-left-in-img-box" href={props.lLink}>
                <img src={`Assets/Main News Assets${props.lPic}`} alt="News Image" />
            </a>

            <a className="main-news-left-in-cat-box" href={props.lCatLink}>
                <p>{props.lCat}</p>
            </a>

            <a className="main-news-left-in-title-box" href={props.lLink}>
                <h2>
                    {props.lTitle}
                </h2>
            </a>

            <p className="main-news-left-in-author-box"><a href={props.lAuthorLink}>{props.lAuthor}</a></p>
            <p className="main-news-left-in-content">{props.lContent}</p>

            <div className="main-news-left-in-box-reviews">
                <a href="#">
                    <i className="fa-regular fa-thumbs-up" style={{ color: '#828282' }}></i>
                    <span>{props.lLikes}</span>
                </a>
                <a href="#">
                    <i class="fa-regular fa-comment" style={{ color: '#828282' }}></i>
                    <span>{props.lComments}</span>
                </a>
            </div>

        </div>
    )
}


export default function World(props) {
    return (
        <>
            <div className="world-right-in-news-box">
                <a className="world-in-news-pic" href={props.link}>
                    <img src={`Assets/Editor World Area Assets${props.pic}`} alt="Editor Image" />
                </a>
                <a className="world-in-news-title" href={props.link}><h3>{props.title}</h3></a>
                <a className="world-in-news-date" href={props.link}><p >{props.date}</p></a>
            </div>
        </>
    )
}

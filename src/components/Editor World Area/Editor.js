export default function Editor(props) {
    return (
        <>
            <div className="editor-left-in-news-box">
                <a className="editor-in-news-pic" href={props.link}>
                    <img src={`Assets/Editor World Area Assets${props.pic}`} alt="Editor Image" />
                </a>
                <a className="editor-in-news-title" href={props.link}><h3>{props.title}</h3></a>
                <a className="editor-in-news-date" href={props.link}><p>{props.date}</p></a>
            </div>
        </>
    )
}
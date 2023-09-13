export default function Videos(props) {
    return (
        <div className="videos-in-box">
            <img src={`Assets/Videos Area Assets${props.pic}`} alt="Video Image" />
            <div className="play-btn-area">
                <a href={props.link}>
                    <i class="fa-solid fa-play" style={{ color: '#ffffff' }}></i>
                </a>
            </div>
        </div>
    )
}

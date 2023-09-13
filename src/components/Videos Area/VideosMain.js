import VideosData from './VideosData';
import Videos from './Videos';

export default function VideosMain() {
    const videosInfo = VideosData.map((video) => {
        return (
            <Videos
                pic={video.pic}
                link={video.link}
            />
        )
    })

    return (
        <section className="videos-sec">
            <div className='videos-overlay'>
                <div className="container">
                    <div className="videos-wrapper">
                        <div className='videos-main-box'>
                            {videosInfo}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
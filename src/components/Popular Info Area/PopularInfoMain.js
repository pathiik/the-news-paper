import PopularNewsLeft from "./PopularNewsLeft";
import InfoNewsRight from "./InfoNewsRight";

export default function PopularInfoMain() {
    return (
        <section className="popular-info-sec">
            <div className="container">
                <div className="popular-info-wrapper">

                    <aside className="top-left-aside">
                        <div className="popular-left-aside-wrapper">
                            <div className="left-aside-top">
                                <div className="popular-left-aside-top-in">Popular News</div>
                            </div>
                            <PopularNewsLeft />
                        </div>
                    </aside>

                    <aside className="top-right-aside">
                        <div className="info-right-aside-wrapper">
                            <div className="right-aside-top">
                                <div className="info-right-aside-top-in">Info News</div>
                            </div>
                            <div className="info-right-aside-news">
                                <h2 className="info-news-in-main-title">4 Most Popular News</h2>
                                <InfoNewsRight />
                            </div>
                            <div className="info-news-newsletter-form-area">
                                <h3 className="newsletter-form-area-title">Newsletter</h3>
                                <p className="newsletter-form-area-info">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <form className="newsletter-form">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    )
}
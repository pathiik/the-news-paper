import LeftNews from './LeftNews';
import RightNews from './RightNews';

export default function MainNews() {
    return (
        <section className='main-news-sec'>
            <div className='container'>
                <div className='main-news-wrapper'>
                    <LeftNews />
                    <RightNews />
                </div>
            </div>
        </section>
    )
}
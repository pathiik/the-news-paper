import World from "./World";
import WorldData from "./WorldData";

export default function WorldRight() {
    const worldInfo = WorldData.map((world) => {
        return (
            <World
                pic={world.pic}
                link={world.link}
                title={world.title}
                date={world.date}
            />
        )
    })

    return (
        <div className="world-right-in-main-news-box">
            {worldInfo}
        </div>
    )
}
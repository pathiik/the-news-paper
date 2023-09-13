import EditorLeft from "./EditorLeft";
import WorldRight from "./WorldRight";

export default function EditorWorld() {
    return (
        <>
            <section className="editor-world-sec">
                <div className="container">
                    <div className="editor-world-wrapper">

                        <aside className="bottom-left-aside">
                            <div className="editor-left-aside-wrapper">
                                <div className="editor-left-aside-top">
                                    <div className="editor-left-aside-top-in">Editor's Pick</div>
                                </div>
                                <EditorLeft />
                            </div>
                        </aside>

                        <aside className="bottom-right-aside">
                            <div className="world-right-aside-wrapper">
                                <div className="world-right-aside-top">
                                    <div className="world-right-aside-top-in">World News</div>
                                </div>
                                <WorldRight />
                            </div>
                        </aside>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
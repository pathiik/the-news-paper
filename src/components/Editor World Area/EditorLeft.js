import Editor from "./Editor";
import EditorData from "./EditorData";

export default function EditorLeft() {
    const editorInfo = EditorData.map((editor) => {
        return (
            <Editor
                pic={editor.pic}
                link={editor.link}
                title={editor.title}
                date={editor.date}
            />
        )
    })

    return (
        <div className="editor-left-in-main-news-box">
            {editorInfo}
        </div>
    )
}
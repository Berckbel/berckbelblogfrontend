import { Editor } from "@tiptap/react"

export const MenuButons = ({ editor }: { editor: Editor }) => {

    const unactive = "bg-white border-2 border-black text-gray-700 font-bold p-2 m-2 rounded-full"
    const active = "bg-gray-700 text-white font-bold p-2 m-2 rounded-full"

    const handleClickBold = () => {
        editor.chain().focus().toggleBold().run()
    }
    const handleClickItalic = () => {
        editor.chain().focus().toggleItalic().run()
    }
    const handleClickStrike = () => {
        editor.chain().focus().toggleStrike().run()
    }
    const handleClickCode = () => {
        editor.chain().focus().toggleCode().run()
    }
    const handleClickClearMarks = () => {
        editor.chain().focus().unsetAllMarks().run()
    }
    const handleClickClearNodes = () => {
        editor.chain().focus().clearNodes().run()
    }
    const handleClickParagraph = () => {
        editor.chain().focus().setParagraph().run()
    }
    const handleClickH1 = () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run()
    }
    const handleClickH2 = () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run()
    }
    const handleClickH3 = () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run()
    }
    const handleClickBulletList = () => {
        editor.chain().focus().toggleBulletList().run()
    }
    const handleClickOrderedList = () => {
        editor.chain().focus().toggleOrderedList().run()
    }
    const handleClickCodeBlock = () => {
        editor.chain().focus().toggleCodeBlock().run()
    }
    const handleClickBlockQuote = () => {
        editor.chain().focus().toggleBlockquote().run()
    }
    const handleClickHorizontalRule = () => {
        editor.chain().focus().setHorizontalRule().run()
    }
    const handleClickHardBreak = () => {
        editor.chain().focus().setHardBreak().run()
    }

    return (
        <menu className={"flex flex-row flex-wrap"}>
            <button
                onClick={handleClickBold}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={editor.isActive('bold') ? active : unactive}
            >
                bold
            </button>
            <button
                onClick={handleClickItalic}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={editor.isActive('italic') ? active : unactive}
            >
                italic
            </button>
            <button
                onClick={handleClickStrike}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={editor.isActive('strike') ? active : unactive}
            >
                strike
            </button>
            <button
                onClick={handleClickCode}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                className={editor.isActive('code') ? active : unactive}
            >
                code
            </button>
            <button
                onClick={handleClickClearMarks}
                className={active}
            >
                clear marks
            </button>
            <button
                onClick={handleClickClearNodes}
                className={active}
            >
                clear nodes
            </button>
            <button
                onClick={handleClickParagraph}
                className={editor.isActive('paragraph') ? active : unactive}
            >
                paragraph
            </button>
            <button
                onClick={handleClickH1}
                className={editor.isActive('heading', { level: 1 }) ? active : unactive}
            >
                h1
            </button>
            <button
                onClick={handleClickH2}
                className={editor.isActive('heading', { level: 2 }) ? active : unactive}
            >
                h2
            </button>
            <button
                onClick={handleClickH3}
                className={editor.isActive('heading', { level: 3 }) ? active : unactive}
            >
                h3
            </button>
            <button
                onClick={handleClickBulletList}
                className={editor.isActive('bulletList') ? active : unactive}
            >
                bullet list
            </button>
            <button
                onClick={handleClickOrderedList}
                className={editor.isActive('orderedList') ? active : unactive}
            >
                ordered list
            </button>
            <button
                onClick={handleClickCodeBlock}
                className={editor.isActive('codeBlock') ? active : unactive}
            >
                code block
            </button>
            <button
                onClick={handleClickBlockQuote}
                className={editor.isActive('blockquote') ? active : unactive}
            >
                blockquote
            </button>
            <button onClick={handleClickHorizontalRule} className={active}>
                horizontal rule
            </button>
            <button onClick={handleClickHardBreak} className={active}>
                hard break
            </button>
        </menu>
    )
}
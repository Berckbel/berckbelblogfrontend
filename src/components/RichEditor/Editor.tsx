import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import { options } from './EditorOptions';
import { MenuEditor } from './MenuEditor';

export const Editor = ({ initialContent }: { initialContent: string } = { initialContent: "" }) => {

    const [content, setContent] = useState<string>(initialContent)
    const [editable, setEditable] = useState<boolean>(true)

    const editor = useEditor({
        extensions: [
            StarterKit.configure(options),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            setContent(editor.getHTML());
        },
        editable: editable
    }, [editable]);

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    return (
        <>
            <button 
                onClick={() => setEditable(!editable)}
                className={"flex self-center p-2 bg-purple-950 font-extrabold text-white max-w-52 rounded-3xl"}
            >
                {editable ? "(Preview) => Raw" : "(Raw) => Preview"}
            </button>
            <div className={!editable ? "hidden" : ""}>
                {editor && <MenuEditor editor={editor} />}
                <EditorContent editor={editor} />
            </div>
            <div className={editable ? "hidden" : ""}>
                <textarea
                    value={content}
                    onChange={handleTextAreaChange}
                    rows={10}
                    className={"w-full bg-gray-100 text-gray-800"}
                ></textarea>
            </div>
        </>
    );
};

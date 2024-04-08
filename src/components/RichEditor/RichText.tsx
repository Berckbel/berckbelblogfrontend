import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import { options } from './EditorOptions';


export const RichText = ({ initialContent }: { initialContent: string } = { initialContent: "" }) => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure(options),
        ],
        content: initialContent,
        editable: false
    }, []);

    return (
        <>
            <EditorContent editor={editor} />
        </>
    );
};

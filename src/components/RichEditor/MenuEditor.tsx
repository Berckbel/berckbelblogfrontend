import { BubbleMenu, Editor } from "@tiptap/react";
import { MenuButons } from "./MenuButtons";

export const MenuEditor = ({ editor }: { editor: Editor }) => {

    if (!editor) {
        return null
    }

    return (
        <>
            <MenuButons editor={editor} />
            <BubbleMenu editor={editor} >
                <MenuButons editor={editor} />
            </BubbleMenu>
        </>
    )
}
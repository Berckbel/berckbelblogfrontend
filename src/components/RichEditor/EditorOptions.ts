import { StarterKitOptions } from "@tiptap/starter-kit";

export const options: Partial<StarterKitOptions> = {
    heading: {
        levels: [1, 2, 3],
    },
    bulletList: {
        HTMLAttributes: {
            class: 'list-disc ml-10',
        },
    },
    orderedList: {
        HTMLAttributes: {
            class: 'list-decimal ml-10',
        },
    },
    codeBlock: {
        HTMLAttributes: {
            class: 'bg-gray-100 rounded-md text-gray-800',
        },
    },
    blockquote: {
        HTMLAttributes: {
            class: 'border-l-4 border-gray-400 italic my-4 pl-4',
        },
    },
}
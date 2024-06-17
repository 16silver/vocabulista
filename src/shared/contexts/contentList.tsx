import { createContext } from "react";

export type ContentType = {
    wordList: string[][],
    setWordList: (_: string[][]) => void,
    generatedText: {
        [key: string]: string,
        easy: string,
        intermediate: string,
        hard: string,
    },
    setGeneratedText: (_: {
        [key: string]: string,
        easy: string,
        intermediate: string,
        hard: string,
    }) => void,
}

export type ContentListType = {
    contentList: ContentType[],
    setContentList: (_: ContentType[]) => void,
}

export const ContentListContext = createContext<ContentListType>({
    contentList: [],
    setContentList: (_: ContentType[]) => {},
})

// export type ListContext = {
//     contentList: string[],
//     setContentList: (_: string[]) => void,
// }

// export const ContentListContext = createContext<ListContext>({
//     contentList: [],
//     setContentList: (_: string[]) => {},
// })

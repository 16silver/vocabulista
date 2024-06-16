import { createContext } from "react";

export type ContentType = {
    wordList: string[][],
    setWordList: (_: string[][]) => void,
    generatedText: string,
    setGeneratedText: (_: string) => void,
}

// export type 

export type ListContext = {
    contentList: string[],
    setContentList: (_: string[]) => void,
}

export const ContentListContext = createContext<ListContext>({
    contentList: [],
    setContentList: (_: string[]) => {},
})

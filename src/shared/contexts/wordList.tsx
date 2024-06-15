import { createContext } from "react";

export type WordListContextType = {
    wordList: string[][],
    setWordList: (_: string[][]) => void,
}

export const WordListContext = createContext<WordListContextType>({
    wordList: [],
    setWordList: (_: string[][]) => {},
})

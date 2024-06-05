import { createContext } from "react";

export type ListContext = {
    contentList: string[],
    setContentList: (_: string[]) => void,
}

export const ContentListContext = createContext<ListContext>({
    contentList: [],
    setContentList: (_: string[]) => {},
})

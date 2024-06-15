import { createContext } from "react";

export type GeneratedTextContextType = {
    generatedText: string,
    setGeneratedText: (_: string) => void,
}

export const GeneratedTextContext = createContext<GeneratedTextContextType>({
    generatedText: "",
    setGeneratedText: (_: string) => {},
})

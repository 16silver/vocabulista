import { useState } from 'react'
import './App.css'
import Start from './Pages/Start'
import Home from './Pages/Home'
import CreateList from './Pages/CreateList'
import ViewList from './Pages/ViewList'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ContentListContext } from './shared/contexts/contentList'
import { WordListContext } from './shared/contexts/wordList'
import Quiz from './Pages/Quiz'
import Example from './Pages/Example'
import { GeneratedTextContext } from './shared/contexts/generatedText'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Start />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/create_list",
        element: <CreateList />
    },
    {
        path: "/view_list",
        element: <ViewList />
    },
    {
        path: "/example",
        element: <Example />
    },
    {
        path: "/quiz",
        element: <Quiz />
    }
]);

function App() {
    const [contentList, setContentList] = useState<string[]>([]);
    const [wordList, setWordList] = useState<string[][]>([]);
    const [generatedText, setGeneratedText] = useState<string>("");
    return (
        <ContentListContext.Provider value = {{
            contentList,
            setContentList,
        }}>
            <WordListContext.Provider value = {{
                wordList,
                setWordList,
            }}>
                <GeneratedTextContext.Provider value = {{
                    generatedText,
                    setGeneratedText,
                }}>
                    <RouterProvider router={router} />
                </GeneratedTextContext.Provider>
            </WordListContext.Provider>
        </ContentListContext.Provider>
    )
}

export default App

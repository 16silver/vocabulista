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
import Quiz from './Pages/Quiz'

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
        path: "/quiz",
        element: <Quiz />
    }
]);

function App() {
    const [contentList, setContentList] = useState<string[]>(["Lista 1, 4 palabras, 오늘은 간단한 수학문제를 ..."]);
    return (
        <ContentListContext.Provider value = {{
            contentList,
            setContentList,
        }}>
            <RouterProvider router={router} />
        </ContentListContext.Provider>
    )
}

export default App

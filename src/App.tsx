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
import { ContentListContext, ContentType } from './shared/contexts/contentList'
import Quiz from './Pages/Quiz'
import Example from './Pages/Example'

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
        path: "/view_list/:id",
        element: <ViewList />
    },
    {
        path: "/example/:id/:difficulty",
        element: <Example />
    },
    {
        path: "/quiz/:id/:difficulty",
        element: <Quiz />
    }
]);

function App() {
    const [contentList, setContentList] = useState<ContentType[]>([]);
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

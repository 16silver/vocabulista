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
    }
]);

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App

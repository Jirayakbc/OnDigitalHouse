import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from "./pages/home/index"
import Novo from "./pages/new/index"
import Editar from "./pages/edit/index"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "novo/",
        element: <Novo />,
    },
    {
        path: "editar/:id",
        element: <Editar />,
    },
]);

function Routes(){
    return(
        <>
        <RouterProvider router={router} />
        </>
    )
}

export default Routes;
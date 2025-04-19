import { createBrowserRouter } from "react-router-dom"
import App from './App'
import HomePage from "./Page/HomePage/page"
import AboutUs from "./Page/AboutUs/page"
import Contact from "./Page/Contacts/page"
import Collection from "./Page/Collection/page"
import { SinglePage } from "./Page/Singlepage.jsx/page"
import LikePage from "./Page/UseLikeStore/LikePage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <>Error Page not found 404!</>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/aboutuspage",
                element: <AboutUs />,
            },
            {
                path: "/homepage",
                element: <HomePage/>,
            },
            
            {
                path: "/contactpage",
                element: <Contact />,
            },   {
                path: "collection/:id",
                element: <SinglePage/>,
            },
            {
                path: "/collectionpage",
                element: <Collection />,
            },
            {
                path:"/likepage",
                element:<LikePage/>
            }
        ]
    }
])


export default router;
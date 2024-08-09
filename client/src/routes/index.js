import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassowrd from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
const router = createBrowserRouter([
    {
        path: "/",
       element:<App/>,
       children:[
        {
            path: "/",
            element:<Home/>
        },
        {path:"login",
            element:<Login/>

        },
        {
            path: "ForgotPassowrd",
            element:<ForgotPassowrd/>
        },
        {
            path:"SignUp",
            element:<SignUp/>
            
        },
        {
            path:"admin-panel",
            element:<AdminPanel/>
        }
       ]
    },
    
])

export default router;
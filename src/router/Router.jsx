import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../home/Home";
import Detels from "../pazes/Detels";
import Brands from "../pazes/Brands";
import Login from "../pazes/Login";
import Signup from "../pazes/Signup";
import Privateroute from "../privactroute/Privateroute";
import Myprofile from "../pazes/Myprofile";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("/cupon.json")
            },
            {
                path:"/detels/:id",
                element:<Privateroute> <Detels></Detels></Privateroute>,
                     
                    
                loader:()=>fetch("/cupon.json")

            },
            {
                path:"/brands",
                element:<Brands></Brands>,
                loader:()=>fetch("/cupon.json")

            },
            {
                path:"/login",
                element:<Login></Login>
                

            },
            {
                path:"/signup",
                element:<Signup></Signup>
                

            },
            {
                path:"/profile",
                element:<Privateroute><Myprofile></Myprofile></Privateroute>
                

            }
        ]
    }
])
 export default router;
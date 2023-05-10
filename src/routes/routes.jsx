import Booking from "../components/Booking/Booking";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../components/Home/Home");
const { default: Login } = require("../components/Login/Login");
const { default: Register } = require("../components/Register/Register");

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/booking/:id',
                element: <Booking></Booking>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])

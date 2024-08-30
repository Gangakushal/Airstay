import React from "react";
import logo from './assests/images/airbnb.png'
import Home from "./Pages/Home";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Game from "./Pages/Game";

document.title = "Airbnb | Holiday rentals, Hotels, Rooms, Experiences and more...";
let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = logo;
document.body.setAttribute('data-theme','light')

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout> <Home/> </Layout>,
    },
    {
        path: "/about",
        element: <Layout><About /></Layout> ,
    },
    {
        path: '/game',
        element: <Game/>
    }
])

export function App(){
    return (
        <RouterProvider router={router} />
    )
}

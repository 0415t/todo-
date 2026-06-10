import { useState } from 'react';
import AppHeader from "./componets/AppHeader";
import Home from "./componets/Home"
import Todo from "./componets/Todo";
import Weather from "./componets/Weather"

import {
    BrowserRouter,
    createBrowserRouter,
    Link,
    Outlet,
    Route,
    Router,
    RouterProvider,
    Routes
}from "react-router-dom"

function App() {

    return (
        <>
        <AppHeader />
        <BrowserRouter>
            <nav className="float-left w-1/5 h-52">
                <Link to="/">Home</Link><br />
                <Link to="/todo">todoリスト</Link><br />
                <Link to="/weather">天気予報</Link>
            </nav>
            <Routes>
                <Route path='/'element={<Home />}></Route>
                <Route path='/todo'element={<Todo />}></Route>
                <Route path='/weather'element={<Weather />}></Route>          
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;

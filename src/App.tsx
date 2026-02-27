import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer, Hero, Menu } from "./components";
import About from "./pages/About";
import Epigrams from "./pages/Epigrams"
import Links from "./pages/Links"
import Press from "./pages/Press";
import NoPage from "./pages/404";

import './App.css'

export function App() {
    return (
        <BrowserRouter>
            <div className="components">
                <Hero/>
                <Menu/>
            </div>
            <div className="content">
                <Routes>
                    <Route index element={<Epigrams/>}/>
                    <Route path={"/autor"} element={<About/>}/>
                    <Route path={"/fraszki"} element={<Epigrams/>}/>
                    <Route path={"/linki"} element={<Links/>}/>
                    <Route path={"/media"} element={<Press/>}/>
                    <Route path={"/*"} element={<NoPage/>}/>
                </Routes>
            </div>
            <div className="components">
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
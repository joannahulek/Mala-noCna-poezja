import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer"
import About from "./pages/About";
import Epigrams from "./pages/Epigrams"
import Links from "./pages/Links"
import Press from "./pages/Press";
import NoPage from "./pages/404";

export default function App() {
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
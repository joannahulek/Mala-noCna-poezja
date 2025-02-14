import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import Hero from "./components/Hero.tsx";
import Menu from "./components/Menu.tsx";
import Footer from "./components/Footer.tsx"
import About from "./pages/About.tsx";
import Epigrams from "./pages/Epigrams.tsx"
import Links from "./pages/Links.tsx"
import Press from "./pages/Press.tsx";
import NoPage from "./pages/404.tsx";

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
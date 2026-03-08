import { Footer, Hero, Menu } from "./components";
import { useOutlet } from "react-router";

import './App.css'

export default function App() {
    const renderedChildRoutes = useOutlet()
    return (
        <div>
            <div className="components">
                <Hero/>
                <Menu/>
            </div>
            <div className="content">
                {renderedChildRoutes}
            </div>
            <div className="components">
                <Footer/>
            </div>
        </div>
    )
}
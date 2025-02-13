import {NavLink} from "react-router-dom";

export default function Menu() {
    return (
            <nav>
                <NavLink to={"/autor"}>O Autorze</NavLink>
                <NavLink to={"/fraszki"}>Fraszki wybrane</NavLink>
                <NavLink to={"/linki"}>Mówią o nas</NavLink>
                <NavLink to={"/media"}>Materiały prasowe</NavLink>
            </nav>
    )
}

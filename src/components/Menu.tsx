import { NavLink } from "react-router-dom";
import { routes } from "../routes";

import "./Menu.css";

export function Menu() {
    return (
        <nav className="nav-flex">
            {Object.values(routes).map((route) => {
                return (
                    <NavLink className="nav-item" to={route.url}>
                        {route.title}
                    </NavLink>
                )
            })}
        </nav>
    );
}

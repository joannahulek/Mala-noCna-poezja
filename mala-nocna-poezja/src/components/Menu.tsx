import "./Menu.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="nav-flex">
      <NavLink className="nav-item" to={"/autor"}>
        O Autorze
      </NavLink>
      <NavLink className="nav-item" to={"/fraszki"}>
        Fraszki wybrane
      </NavLink>
      <NavLink className="nav-item" to={"/linki"}>
        Mówią o nas
      </NavLink>
      <NavLink className="nav-item" to={"/media"}>
        Materiały prasowe
      </NavLink>
    </nav>
  );
}

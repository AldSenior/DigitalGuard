import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {


    return (
        <div className="Header">
           <p><Link to="/">Главная</Link></p>
           <p><Link to="/Stati">Статьи</Link></p>
        </div>
    )
}
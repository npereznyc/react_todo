import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>To Do</h1>
            <nav>
                <Link to={'/'}>Home</Link> {" "}
                <Link to={'/todos'}>ToDos</Link>
            </nav>
        </header>
    )
}

export default Header;
import React from "react";
import "./nav.css"

const Navbar = () => {
    return (
        <div className="nav">
            <h1>NFL Stats</h1>
            <ul>
                <li>Home</li>
                <li>Stats</li>
                <li>Teams</li>
            </ul>
        </div>
    )
}

export default Navbar;
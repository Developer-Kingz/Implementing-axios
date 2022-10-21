// import React from "react";
// import "./App.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="nav">
                
                    <h1>Home page</h1>
                
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="Nine">Nine</Link>
                    <Link to="Get">Contact us</Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;

import React from "react"
import { Link } from "gatsby"


const Navbar = () => {
    return (
        <nav>
            <h1>Jason Kundi</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Portfolio Projects</Link>
        </nav>
    )
}

export default Navbar
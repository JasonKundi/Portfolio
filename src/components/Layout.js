import React from "react"
import Navbar from "./Navbar"


const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div classNAme="content">
                { children }
            </div>
            <footer>
                <p>Enjoy</p>
            </footer>
        </div>
    )
}

export default Layout
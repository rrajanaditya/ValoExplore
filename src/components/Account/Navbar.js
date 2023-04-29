import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from "../../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [activeNav, setactiveNav] = useState("");
    const navhandler = (e) => {
        setactiveNav((prevVal) => {
            if (prevVal === "")
                return "active"
            return ""
        })
    }
    return (
        <div className={`navbar ${activeNav}`}>
            <div className="logo">
                <img src={logo} alt="ValoExplore" id="nav-logo" />
            </div>
            <div className="hamburger" onClick={navhandler}>
                <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
            <div className={`nav-links ${activeNav}`}>
                <ul>
                    <li>
                        <Link to="/account" onClick={() => { setactiveNav("") }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/account/store" onClick={() => { setactiveNav("") }}>Store</Link>
                    </li>
                    <li>
                        <Link to="/account/inventory" onClick={() => { setactiveNav("") }}>Inventory</Link>
                    </li>
                    <li>
                        <Link to="/account/share" onClick={() => { setactiveNav("") }}>Share</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
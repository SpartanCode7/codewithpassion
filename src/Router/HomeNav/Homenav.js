import React from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png'
import './style.scss'

function Homenav() {
  return (
    <div className="primary__nav">
        <div className="container primary__nav_inner">
            <div className="site__logo">
                <Link to="/">
                    <img src={ logo } alt="Logo" />
                </Link>
            </div>
            <div className="nav__links">
                <Link to="/">
                    Home
                </Link> 
                <Link to="/about">
                    About
                </Link>
                <Link to="/login">
                    Login
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default Homenav

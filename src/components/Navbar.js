import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Reminz.co</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-3">
                        <li className="nav-item">
                            <NavLink exact className="nav-link " aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/persamaan">Persamaan</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/random">Random</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/pilgan">Pilhan Ganda</NavLink>
                        </li>
                        </ul>
                 </div>
            
            </div>
           </div>
            
            
        </nav>
    )
}

export default Navbar

import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/"><img src="/Assets/img/F1-logo.png" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="/Assets/img/hamburger.png" alt="hamburger" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/home"><button className="btn">Home</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/drivers"><button className="btn">Drivers</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/constructors"><button className="btn">Constructors</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/race_results"><button className="btn">Schedule / Results</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/circuits"><button className="btn ">Circuits</button></NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
export default withRouter(Navbar)


import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import Countdown from '../dashboard/countdown'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"><img width="50px" src="./Assets/img/F1-logo.png" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/drivers"><button>Drivers</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/constructors"><button>Constructors</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/race_results"><button>Results</button></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/circuits"><button>Circuits</button></NavLink>
                    </li>
                </ul>

            </div>
            <Countdown />
        </nav>
    )
}
export default withRouter(Navbar)


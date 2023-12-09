import React from "react";
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {

    return (
        <nav className="navigation">
            <div className="menu">
                <h1 className="site-title"><NavLink to="/" className="menu-item" activeClassName="active">YouTils</NavLink ></h1>
                <NavLink to="/pomodoro" className="menu-item">
                    Pomodoro Clock
                </NavLink >
                <NavLink to="/lottery" className="menu-item" activeClassName="active">
                    Lottery Numbers
                </NavLink >
                <NavLink to="/timer" className="menu-item" activeClassName="active">
                    Timer
                </NavLink >
                <NavLink to="/wordcounter" className="menu-item" activeClassName="active">
                    Word Counter
                </NavLink >
            </div>
        </nav>
    )
}

export default Navigation;
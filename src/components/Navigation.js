import React from "react";
import './Navigation.scss';

function Navigation() {
    return (
        <nav className="navigation">
            <div className="menu">
                <div className="menu-item">Pomodoro Clock</div>
                <div className="menu-item">Lotto Number Generator</div>
                <div className="menu-item">Timer</div>
                <div className="menu-item">Word Count</div>
            </div>
        </nav>
    )
}

export default Navigation;
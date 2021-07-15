import React from "react";

function Header({darkScheme, onDarkModeClick}){

    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                {darkScheme ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>)
        
}

export default Header;
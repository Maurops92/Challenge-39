import React from "react";
import './Header.css'
import Searhc from "../Search/Search";
import Buttons from "../Button/Button";


function Header (){
    return(
        <>
        <nav className="NavBar">
            <div className="bottones">
            <Buttons/>
            <Buttons/>
            <Buttons/>
            </div>
            
            <Searhc></Searhc>

        
        </nav>
        </>
    )
}

export default Header;
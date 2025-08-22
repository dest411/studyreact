import React from "react";
import Button from "./Button";
import '../css/Header.css';

const Header = () => {
    return (
        <header>
            <h1>My React App</h1>
            <h3>TO DO LIST</h3>
            <Button />
        </header>
    );
}
export default Header;
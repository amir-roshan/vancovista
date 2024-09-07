import "./navbar.scss";
import { useState } from 'react';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        console.log(isClicked);
    };

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo image" />
                    <span>VancoVista</span>
                </a>
                <a href="/home">Home</a>
                <a href="/home">About</a>
                <a href="/home">Contacts</a>
                <a href="/home">Agents</a>
            </div>
            <div className="right">
                <a href="/home">Sign In</a>
                <a href="/home" className="sign-up">Sign Up</a>
                <div className="menu-icon">
                    <img onClick={handleClick} src="/menu.png" alt="" />
                </div>
                <div
                    className={`menu ${isClicked ? "clicked" : ""}`}>
                    <a href="/home">Home</a>
                    <a href="/home">About</a>
                    <a href="/home">Contacts</a>
                    <a href="/home">Agents</a>
                    <a href="/home">Sign In</a>
                    <a href="/home">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
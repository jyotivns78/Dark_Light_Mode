import React, { useEffect, useState } from "react";
import './DashBoard.scss';
import logo from '../gg2.jpg';
import DarkLightMode from "../Components/DarkLightMode";
import { Link } from "react-router-dom";
// import RJLogo from "../Assets/Images/RJLogo (2).png"


const Dashboard = () => {
    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if(theme === "dark-theme")
        {
            setTheme("light-theme");
        }
        else{
            setTheme("dark-theme");
        }
    };


    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    return (
        <div className="darklight">
            <header>
                <nav>
                    {/* <img src={ RJLogo } alt="" /> */}
                    <ul>
                        <li>
                            <Link to="#">Home</Link>
                        </li>
                        <li>
                        <Link to="#">About Me</Link>
                        </li>
                        <li>
                        <Link to="#">Services</Link>
                        </li>
                        <li>
                        <Link to="#">Contact</Link>
                        </li>
                        <li>
                            <Link to="#"><DarkLightMode /></Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
            <section className="">
                <div className="container grid grid-two-column">
                    <div className="hero-section-data">
                    <h1>Dark Light Mode</h1>
                    <p>
                        Pariatur nulla deserunt sint duis incididunt sit ullamco excepteur eiusmod. Culpa tempor cupidatat excepteur id aliqua aute ex aliquip veniam amet voluptate. Quis sit labore Lorem laboris ut et.
                    </p>
                    <Link to="#" className="btn" onClick={() => toggleTheme()}>
                        Toggle Mode
                    </Link>

                    </div>
                    <div className="hero-section-image">
                        <img src={ logo } alt="hero"></img>
                    </div>
                </div>
            </section>
            </main>
        </div>
    )
}




export default Dashboard;

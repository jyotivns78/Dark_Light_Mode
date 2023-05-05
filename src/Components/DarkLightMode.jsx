import React, { useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const DarkLightMode = () => {
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
        <>
                    {/* <a href="#" className="btn" onClick={() => toggleTheme()}>
                        Toggle Mode
                    </a> */}
                    <div className="moonLight" onClick={() => toggleTheme(theme)}>
                        {
                            theme ? <LightModeIcon /> : <DarkModeOutlinedIcon />
                        }
                    </div>
        </>
    )
}




export default DarkLightMode

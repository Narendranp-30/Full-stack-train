import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/theme";
import Counter from "./Counter";
function ThemeButton()
{   
    const {theme,toggleTheme,}=useContext(ThemeContext);
    return(
        <button onClick={toggleTheme}>{theme}</button>
    )
}

export default ThemeButton;
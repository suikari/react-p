import Header from "../component/contextEx/Header"
import Body from "../component/contextEx/Body"
import Footer from "../component/contextEx/Footer"
import { DarkModeContext } from "../context/DarkModeContext"
import { useState } from "react"
import ContextEx from "../component/contextEx/ContextEx"

function Main (){
    let [isDark, setDark] = useState(false);

    let DarkMode = { isDark , setDark};

    return (
        <div style={{  backgroundColor : isDark ? "black " : "white ",  color :  isDark ? "white" : "black" }}>
        <DarkModeContext.Provider value={DarkMode}>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </DarkModeContext.Provider>

        <ContextEx></ContextEx>
        </div>
    )
}


export default Main
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Rside (){
    const value = useContext(DarkModeContext);


    return (
        <div style={{flex : 1, height: "300px", backgroundColor : value.isDark ? "#000"  : "#ddd"}}>

            R
        </div>
    )
  }
  
  
  export default Rside
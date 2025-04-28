import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Lside (){
    const value = useContext(DarkModeContext);


    return (
        <div style={{flex : 1, height: "300px", backgroundColor : value.isDark ? "#000" : "#ddd"}}>
            L
        </div>
    )
  }
  
  
  export default Lside
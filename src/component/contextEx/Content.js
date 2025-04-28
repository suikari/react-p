import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Content (){
        const value = useContext(DarkModeContext);

        return (
        <div style={{flex : 2, height: "300px", backgroundColor : value.isDark ? "#000" : "#d1d1d1"}}>

            C
        </div>
    )
  }
  
  
  export default Content
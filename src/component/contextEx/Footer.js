import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Footer (){
  const value = useContext(DarkModeContext);

  return (
    <div style={{ height : "50px" , backgroundColor : value.isDark ? "#000" : "green" }}>
        F
     </div>
  )
}


export default Footer
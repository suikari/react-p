import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

function Header (){
    const value = useContext(DarkModeContext);
  
  return (
      <>
        <div style={{ height : "50px" , backgroundColor : value.isDark ? "#000" : "green" }}>
            <button onClick={()=>{value.setDark(!value.isDark)}}> {value.isDark ? "기본 모드" : "다크 모드"}</button>
            <div>
            H

            </div>
        </div>

      </>
  )
}


export default Header
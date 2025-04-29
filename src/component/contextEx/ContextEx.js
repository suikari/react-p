
import {createContext, useContext , useState } from "react"
 
export const MyContext = createContext();

function Child1 (){
    const value = useContext(MyContext);

    return (
      <>
        <div style={{ color: value.isDark ? "black" : "white" , backgroundColor : value.isDark ? "red" : "black" }}>자식 1</div>
        
        <Child2 >
        </Child2>

      </>
    )
}

function Child2 (){
  const value = useContext(MyContext);
  
  return (
    <>
      자식 2
      <button onClick={()=>{
        value.setDark(!value.isDark);
      }}> { value.isDark ? "검은색" : "빨간색"  } </button>
      <Child3 >
      </Child3>
    </>
  )
}
function Child3 (){

  //const value = useContext(MyContext);
  //console.log(value);

  return (
    <div>
        자식 3
    </div>
  )
}
function ContextEx(){

    let [isDark, setDark] = useState(false);

    let DarkMode = { isDark , setDark};


    //props.fnHeader();
    
    return (
      <div>
        <MyContext.Provider value={DarkMode}>
            <Child1 >
            </Child1>

        </MyContext.Provider>
      </div>
    )
}



export default ContextEx
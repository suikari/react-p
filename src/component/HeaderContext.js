import { useContext } from "react"
import { MyContext } from "../context/MyContext"

function Child1 (){
    return (
      <>
      
        자식 1
        <Child2>
        </Child2>

      </>
    )
}

function Child2 (){

  return (
    <>
      자식 2
      <Child3>
      </Child3>
    </>
  )
}
function Child3 (){

  const value = useContext(MyContext);
  console.log(value);

  return (
    <>
      자식 3

    </>
  )
}
function HeaderContext(props){
    
    //props.fnHeader();
    
    return (
      <div>
        <Child1>

        </Child1>
  
      </div>
    )
}

export default HeaderContext
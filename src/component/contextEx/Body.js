import Lside from "./Lside"
import Rside from "./Rside"
import Content from "./Content"

function Body (){
  return (
      <div style={{display:"flex"}}>
            <Lside></Lside>
            <Content></Content>
            <Rside></Rside>
      </div>
  )
}


export default Body
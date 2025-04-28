import HeaderContext from "../component/HeaderContext"
import { MyContext } from "../context/MyContext"

function ContextEx (){
    let sharedValue = { id : "text", name : "hong" }; // 보통 맵으로 표현 공유값

    return (
        <>
            <MyContext.Provider value={sharedValue}>
                <HeaderContext ></HeaderContext>
            </MyContext.Provider >
        </>
    )

}



export default ContextEx
import { useState ,useReducer } from "react"


function Reducer (state, action) {
    
    switch (action.type){

        case "inc"   : 
            return {number : state.number + 1}
        case "dec"   :
            return {number : state.number - 1}
        case "reset" : 
            return {number : 0}
        default : 
            throw new Error("에러!!!!");
            break;
    } 

}

function ReducerEx (){
    
    let [num,setNum] = useState(0);
    let [count,setCount] = useState(0);

    let initialValue = {number : 0};
    
    let [state, dispatchState ] = useReducer(Reducer, initialValue );


    let fnCount = (type) => { 
        switch (type){

            case "inc"   : 
                setCount(++count);
                break;
            case "dec"   :
                setCount(--count);
                break;
            case "reset" : 
                setCount(0);
                break;
            default : 
                throw new Error("에러!!!!");
                break;
        } 
            
    };

    return (
        <>
            <h2> {num} </h2>
            <div>
                <button onClick={()=>{setNum(++num);}}>증가</button>
                <button onClick={()=>{setNum(prev => prev-1 );}}>감소</button>
                <button onClick={()=>{setNum(0);}}>초기화</button>
            </div>
            <hr></hr>
            <h2> {count} </h2>
            <div>
                <button onClick={()=>{fnCount("inc")}}>증가</button>
                <button onClick={()=>{fnCount("dec")}}>감소</button>
                <button onClick={()=>{fnCount("reset")}}>초기화</button>
                <button onClick={()=>{fnCount("error")}}>에러</button>
            </div>
            <hr></hr>
            <h2> {state.number} </h2>
            <div>
                <button onClick={()=>{dispatchState({ type : "inc"})}}>증가</button> 
                <button onClick={()=>{dispatchState({ type : "dec"})}}>감소</button>
                <button onClick={()=>{dispatchState({ type : "reset"})}}>초기화</button>
            </div>
        </>
    )
}

//dispatchState << state는 디폴트 action만 주면됨

export default ReducerEx
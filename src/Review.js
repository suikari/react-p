import { useState } from "react";

// probs 쓰기싫으면 바로 받기 가능
function Header ( {title, fnInfo}){
    // props 파라미터안에 함수로 fnInfo로 받아서 타이틀 클릭시 실행


    return (
        <>
            <h2> <a href="/" onClick={(e)=>{
                e.preventDefault();
                fnInfo(title);
            }}>
                {title}
                </a>
            </h2>
        </>
    )
}

function Body(probs){
    
    return (
        <div>
            {probs.count}
            <button onClick={()=>{
                probs.fnCount();
            } }>증가!</button>
        </div>
    )
}

function Review () {
    let [count, setCount] = useState('0');

    

    return (

        <div>

         <Header title="Hello React!" fnInfo={(x)=>{
            alert(x);
         } }/>
         <Body count={count} fnCount={()=>{
            setCount(++count);
         }}></Body>

        </div>
    )
}

export default Review
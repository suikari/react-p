import { useState , useEffect, use } from "react";

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
                probs.fnCount(probs.count +1);
            } }>증가!</button>
        </div>
    )
}

function Footer (probs){
    return (
        <div>
            <ul>
                { probs.list.map((x)=>{ 
                    return <li key={x.stuNo}> 학번 : {x.stuNo}  , 이름 : {x.stuName} , 학과 : {x.stuDept} </li> })}
            </ul>
         </div>
    )

}

function Review () {
    let [count, setCount] = useState(0);
    let [number, setNumber] = useState(0);

    // useEffect(()=>{
    //     alert("안녕");

    //     return ()=>{
    //         alert("클린업 함수");
    //     }
    // },[number]); 

    let list =  [   { stuNo : "1234" , stuName : "홍길동", stuDept : "컴퓨터" },
                    { stuNo : "1213" , stuName : "김철수", stuDept : "전기" },
                    { stuNo : "9878" , stuName : "박영희", stuDept : "디자인" },
                ]

    return (

        <div>

         <Header title="Hello React!" fnInfo={(x)=>{
            alert(x);
         } }/>
         <Body count={count} fnCount={setCount}></Body>
         <Body count={number} fnCount={setNumber}></Body>
         <Footer list={list} />
        </div>
    )
}

export default Review
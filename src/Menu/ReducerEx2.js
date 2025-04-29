import { useReducer , useState , useRef } from "react";


let initialValue = [ 
    { req: 0, money : 0, type : "initial", date : new Date() },
    { req: 10000, money : 10000, type : "deposit", date : new Date() },
    { req: 3000, money : 7000, type : "withdrawal", date : new Date() }
];

function Reducer (state , action){
    console.log("test",state[state.length-1].money);

    if (state[state.length-1].type === 'cancel' ){
        alert("해지된 통장은 수정 불가능합니다.");
        return [...state];
    }

    switch (action.type) {

        case "deposit"   : 
            return [ ...state,{ req : Number(action.value) , money : Number(state[state.length-1].money) + Number(action.value) , type : "deposit", date : new Date() }]
        case "withdrawal"   :
            if ( Number(state[state.length-1].money) - Number(action.value)  >= 0 ){
                return [ ...state,{ req : Number(action.value) , money : Number(state[state.length-1].money) - Number(action.value)  , type : "withdrawal", date : new Date() }]
            } else {
                alert("잔액이 부족합니다!!");
                return [...state];
            }
        case "cancel" :
            if (Number(state[state.length-1].money) === 0 ) {
                return [ ...state,{ req : 0 , money : 0 , type : "cancel", date : new Date() }]  
            } else {
                alert("잔액이 남아있습니다!!");
                return [...state];
            } 
        default : 
            throw new Error("에러!!!!");
            break;
    } 
}

function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

function ReducerEx2 (){
    let [state, dispatchState ] = useReducer(Reducer, initialValue );
    
    let [inputMoney, setMoney] = useState(0);

    let inputRef = useRef();

    let changeType = (type) => {
        switch (type) {
        case "deposit"   :         
            return  "입금"
        case "withdrawal"   :
            return  "출금"
        case "cancel" :
            return  "해지"
        default : 
            return  "개설"
        }
    }

    return (
        <>
            <h3>{state[state.length-1].money} 원</h3>
            <input ref={inputRef} value={inputMoney} type="number" placeholder="금액" onChange={(e)=>{
                setMoney(e.target.value);
            }}></input>
            <div>
                <button onClick={()=>{
                    dispatchState({ type : "deposit" , value : inputMoney });
                    setMoney("");
                }}>입금</button>
                <button onClick={()=>{
                    dispatchState({ type : "withdrawal" , value : inputMoney });
                    setMoney("");
                }}>출금</button>
                <button onClick={()=>{
                    dispatchState({ type : "cancel" , value : 0 });
                }}>해지</button>
            </div>
            <hr/>
            <h3>입출금 내역</h3>
            <ul>
                { state.map((item , index)=>{
                    return <li key={index}> {changeType(item.type)} , 입/출금 금액 : {item.req} ,  잔액 : {item.money} , 요청 날짜 : {dateFormat(item.date)}  </li>
                }) }
            </ul>
        </>
    )
}
export default ReducerEx2
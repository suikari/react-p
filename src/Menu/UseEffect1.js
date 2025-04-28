import { useEffect , useState } from "react";

function Effect(){
    //버튼 누르면 숫자 1씩
    let [num, setNum]  = useState(1);
    let [num2, setNum2] = useState(1);

    let value = 0
    useEffect(() => {
        // setNum2 (num2*2);
        // console.log(num);
        //setInterval(()=>{console.log('실행 중!');},1000);
        //setTimeout
    }, []);

    const fnAdd = () => {
        setNum(++num);
        //console.log(num);

    }
    const fnAdd2 = () => {
        setNum2(++num2);
        //console.log(num);

    }
    return (
        <div>
            {num} | {num2}
            <div>
            <button onClick={()=>{
                fnAdd();
            }}>증가</button>
            </div>
            
            <div>
            <button onClick={()=>{
                fnAdd2();
            }}>증가2</button>
            </div>
            
        </div>
    )
}

export default Effect
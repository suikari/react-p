import { useState , useRef, useEffect } from "react"
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DialogSample from './DialogSample'

function Ref(  ){
    let [numState,setNum] = useState(1);
    let numVar = 1;
    let numRef = useRef(1);
    let inputNum = useRef(0);


    let inputRef = useRef();

    let [inputnumState,setInput] = useState(inputNum);
    
    useEffect (()=>{
        inputRef.current.focus();
    },[])

    return (
        <>
            <div>
                <div> {numState} <Button variant="outlined" onClick={()=>{setNum(numState+1)}}endIcon={<SendIcon />}> state 증가</Button> </div>
                <div> {numVar} <button onClick={()=>{
                    numVar++;
                    console.log(numVar);
                }}> var 증가</button> </div>
                <div> {numRef.current} <button onClick={()=>{
                    numRef.current++;
                    console.log(numRef.current);

                }}> Ref 증가</button> </div>

                <input ref={inputRef} value={inputnumState} type="number" onChange={ (e)=>{
                    setInput(e.target.value);                   
                }} ></input>
                <button onClick={ () =>{
                    setNum(Number(numState)+Number(inputnumState));
                    setInput("");
                    inputRef.current.focus();

                }}>추가</button>
            </div>
            <DialogSample/>
        </>
    )
}


export default Ref 


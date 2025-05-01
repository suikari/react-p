import { Input } from "@mui/material"
import { useId } from "react";

function UserInput (){
    let id = useId();

    console.log(id);

    return (
        <div>
            <div>
                <label htmlFor={id+"-id"}> 아이디 : </label>
                <Input id={id+"-id"}></Input>
            </div>
            <div>
                <label htmlFor={id+"-pwd"}> 비밀번호 : </label>
                <Input id={id+"-pwd"}></Input>
            </div>
            <div>
                <label htmlFor={id+"-name"}> 이름 : </label>
                <Input id={id+"-name"}></Input>
            </div>
        </div>
    )
}

function UserIdEx () {
    return(
        <>
            <UserInput/>
        </>
    )
}


export default UserIdEx
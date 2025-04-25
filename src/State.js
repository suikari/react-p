import './App.css';
import { useState } from 'react';

// function NumState() {
  
//   // let numState = useState(1);
//   // let num = numState[0];
//   // let setNum = numState[1];

//   let [num, setNum] = useState(1);


//   const fnIncrease = function(){
//      setNum(++num);
//   }

// //use State
// //hooks  

//   return (
//     <div className="App">
//       {num}
//       <div>
//         <button onClick={fnIncrease}>증가!</button>
//       </div>
//     </div>
//   );

// }

function State() {
  
  let userlist = [
    {id : 1 , name : "Hong" } ,
    {id : 2 , name : "Lee"  } ,
    {id : 3 , name : "Kim"  } ,
  ];
  let [list, setList] = useState(userlist);

  let name = "";

  const fnAdd = ( (userName)=> {
    let item = {id : list.length+1 , name : userName };
    let newList = [...list,item];
    //  let newList = [ {id : list.length+1 , name : userName } , ...list]
    //newList.push({id : list.length+1 , name : userName });
    // setList([item,...list]);
    setList(newList);
    console.log(userlist);
  })

  return (
    <div className="App">
      <input onChange={(e)=>{
        name = e.target.value;
      }}></input>
      <button onClick={()=>{
        fnAdd(name);
      }}>추가</button>
      {list.map(( item )=>{
        return <li key={item.id}>{item.name}</li>
      })}
    </div>
  )

}

export default State;

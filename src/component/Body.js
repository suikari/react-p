function Body(props){


    // let list = [];
    // for (let i=0;i< props.list.length; i++) {
    //     list.push( <li key={props.list[i].subId}>{props.list[i].subName}</li> );
    // }


    
    let title = <h3>과목 목록</h3>;
  
    return (
      <div>
        <ul>
          {title}
          { props.list.map( item => {
                return <li key={item.subId}> <a href="/" onClick={ (e) => {
                    e.preventDefault(); 
                    props.fnBody(item.subName);
                }}>{item.subName}</a></li>
            }) 
          }
        </ul>
      </div>
    )
  }


  export default Body
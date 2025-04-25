function Header(props){
    
    //props.fnHeader();
    
    return (
      <div>
        <h2 style={{color:"red",fontSize:"30px"}}> 
            <a href="/" onClick={ (e) => {
                    e.preventDefault(); // 이벤트 방지
                    props.fnHeader(props.content);
                }} 
            >
                {props.title}
            </a>
        </h2>
  
      </div>
    )
}

export default Header
function Footer(props){
    return (
      <div>
        <h3>
            { props.list.map( item => {
                return <li key={item}> <a href="/" onClick={ (e) => {
                    e.preventDefault(); 
                    props.fnFooter(item);
                }}>{item}</a></li>
            }) 
          }
        </h3>
      </div>
    )
  }


  export default Footer
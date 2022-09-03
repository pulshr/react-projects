export const Book = ({image,name,author,description})=>{
    return <article className="book">
      <img src={image} alt="" style={{width:"300px",height:"400px"}} 
      onClick={()=>{alert("You clicked on: "+name)}} onPointerOver={()=>{console.log(description)}}></img>
      <h3 style={{wordwrap:'break-word',width:'300px',alignContent:'center'}}>{name}</h3>
      <h4 style={{color:'#617d98',fontSize: '0.75rem', margintop: '0.25rem'}}>{author}</h4>
      </article>;
  }
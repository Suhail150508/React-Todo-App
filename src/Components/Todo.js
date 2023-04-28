import React from 'react';


export default function Todo(props) {

const{title,desc}=props.todo
const {id}=props

 const handleClick= (id)=>{
props.removeItems(id)
}
  return (<section  style={{marginTop:"1rem"}}>
      
<div style={{backgroundColor:"red",borderRadius:"15px",color:"white",display:"flex",flexDirection:"row",width:"85%",margin:"30px",padding:" 20px",height:"70px",boxShadow:"2px 4px 2px black",justifyContent:"space-around"}}>

  <h3>{title}</h3>
  <p>{desc}</p>

  <button style={{borderRadius:"20px", cursor:"pointer"}} onClick={()=>{handleClick(id)}}>
    <i className="fa fa-trash fa-2x"></i> Delete
  </button>

</div>
  </section>
  

  );
}

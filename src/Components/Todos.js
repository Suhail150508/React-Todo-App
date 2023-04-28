// import React from 'react';
// export default function Todos(props) {

//  const {title,descrip}=props.todo
//   return (<article>
//     <div style={{backgroundColor:"red",borderRadius:"15px",color:"white",display:"flex",width:"100%",margin:"30px",padding:" 10px",height:"70px",gap:"20px"}}>
//        <div>
//         <h3>{title}</h3>
//         <p>{descrip}</p>
     
//         </div> 

//     <button><i className="fa fa-trash fa-2x"></i></button>
//     </div>
//     </article>
//   );
// }
import React from 'react';
import Todo from './Todo';


export default function Todos(props) {

const item=(id)=>{
props.removesItem(id)
}
  return (
  <section style={{display:"flex",flexDirection:"row",flexWrap:"wrap",}}>

    { 
    
    props.todos.map((todo)=> (< Todo todo={todo.todo} key={todo.id} id={todo.id} 
    removeItems={item}
    />

))
}



  </section>
  )
}

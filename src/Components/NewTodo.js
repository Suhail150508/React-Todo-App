import React,{ useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
 

export default function NewTodo(props) {

const [todo,setTodo]= useState({title: '',descrip:''})
const {title,desc}=todo

const handleChange =(event)=>{
  const name= (event.target.name)
  setTodo((oldTodo)=>{
    return {...oldTodo,[name]: event.target.value}
  })
}
const handleSubmit=(event)=>{
event.preventDefault();
props.AddForm(todo)
}


  return (
<form onSubmit={handleSubmit} style={{backgroundColor:"grey",margin:"0 auto",width:"30%",height:"230px",padding:"10px",borderRadius:"15px"}}>
<div>
<label htmlFor='title'style={{fontSize:"30px"}}>Title:</label><br/>
<input type="text"  name='title' id='title' value={title}
onChange={handleChange} required style={{fontSize:"10px",borderRadius:"10px",height:"20px",width:"200px",fontSize:"15PX"}}
/>
{/* {formik.touched.title && formik.errors.title ?<span>{formik.errors.title}</span>:null  }  */}
</div>
<div>
<label htmlFor='descrip' style={{fontSize:"30px"}}>Descrip:</label>
<input type="text"  name='desc' id='des' value={desc}
onChange={handleChange} required style={{fontSize:"20px",borderRadius:"10px",width:"95%",height:"50px", paddingTop:"20px"}}
/>
</div>

<button style={{marginTop:"20px",borderRadius:"10px"}}>Submit</button>
</form>
  );
}



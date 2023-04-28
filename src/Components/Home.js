import React,{useState} from 'react';
import Todos from './Todos';
import style from './Home.module.css'
import NewTodo from './NewTodo';
import {v4 as uuidv4} from 'uuid'



// const dummyTodos=[
  
//   {
//   id:1,
//   title:"todo title 1",
//   desc:"doto 1 description here"
// },
//   {
//   id:2,
//   title:"todo title 2",
//   desc:"doto 2 description here"
// }
// ]

export default function Home() {

  const [todos,setTodos]=useState([])

  const AddForm=(todo)=>{

setTodos((prevTodos)=>{
  return [...prevTodos,{id: uuidv4(), todo}]
})
  }
 const removeItem =(id)=>{

setTodos((prevTodos)=>{
  const filterded= prevTodos.filter((todo)=>todo.id !==id)
  return filterded;
})

  

 }
  return (
    <div className={style.container} style={{backgroundColor:"gray"}}>
    <h1>Todo App</h1>
    <NewTodo AddForm={AddForm}/>
    <Todos todos= {todos}   removesItem= {removeItem}   />
  

    </div>

  );
}

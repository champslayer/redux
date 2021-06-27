import React ,{useEffect} from 'react';

const ToDolist = ( {toDo,deleteTodo} ) =>{

     const toDoList = toDo.length ? (
          toDo.map(todo=>{
               return(
                    <div className="collection-item center" key={todo.id} >
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.list}</span>
                    </div>
               )
          })
     ):(
          <p className="center blue-text"> ADD SOMETHING TO DO </p>
     )
     
     return(
          <div className="toDo colection">
               { toDoList }
          </div>
     )
}
export default ToDolist;
import React,{ Component ,useState ,useEffect} from 'react';
import ToDolist from './ToDolist';
import { FireStore } from './Firebase.js/Firebase';
import firebase from 'firebase';

const  Profile =()=> {
  const [input,setinput]=useState('');

  useEffect(() => {
    getTodo();
  }, [])

  const getTodo=()=>{
     FireStore.collection("todos")
  }
  const deleteTodo =(id)=>{
    const toDo = this.state.toDo.filter(todo =>{
      return(
        todo.id !== id
      )
    })
    this.setState({
      toDo
    })
  }

  const ifChanged = (e) => {
    this.setState({
        input: e.target.value
    })
}

const onClick =(e)=>{
  e.preventDefault();
  console.log("it works")
  FireStore.collection("todos").add({
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    todo:input
  })
}

  return(
      <div className ="Profile">
        <h1 className="center blue-text">ToDO LIST</h1>
        <form onSubmit={onClick} >
          <label>ADD FROM HERE</label>
          <input value={input} onChange={(e)=>setinput(e.target.value)} />
        </form>
      </div>    
  )
};

//<ToDolist toDo={this.state.toDo} deleteTodo={this.deleteTodo} />
export default Profile
;

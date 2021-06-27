import React,{ Component } from 'react';
import ToDolist from './ToDolist';
import AddTodo from './Addtodo';

var num=2;
class  Profile
 extends Component {
  state = { 
    toDo:[
        { id:1, list:"Lets Start" },
    ]
  }


  deleteTodo =(id)=>{
    const toDo = this.state.toDo.filter(todo =>{
      return(
        todo.id !== id
      )
    })
    this.setState({
      toDo
    })
  }
  toAdd = (todo) =>{
    todo.id=num++;
    let toDo=[...this.state.toDo,todo];
    this.setState(
      {toDo}
    )
  }
  render (){
    return(
        <div className ="Profile">
           <h1 className="center blue-text">ToDO LIST</h1>
           <ToDolist toDo={this.state.toDo} deleteTodo={this.deleteTodo} />
           <AddTodo toAdd={this.toAdd}/>
        </div>    
    )
  };
}

export default Profile
;

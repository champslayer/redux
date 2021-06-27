import React, { Component } from 'react';

class AddTodo extends Component{
     state={
          list:''
     }
 
     ifChanged = (e) => {
          this.setState({
              list: e.target.value
          })
     }

     ifClicked = (e)=> {
          e.preventDefault();
          this.props.toAdd(this.state);
          this.setState({
               list:''
          })
     }
     
     render(){
          return(
               <div className="addTodo">
                   <form onSubmit={this.ifClicked} >
                       <label>ADD FROM HERE</label>
                       <input onChange={this.ifChanged} value={this.state.list}></input>
                   </form>
               </div>
          )
     }
}
export default AddTodo;
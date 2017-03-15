import * as React from 'react';
import './App.css';
//TITLE COMPONENT------------------------------
function Title(props) {
  return(
      <h1 className="text-center">A Simple To-Do app</h1>
    )
}


// FORM COMPONENT--------------------------------
var Form = React.createClass({

  toDoAdder: function (e) {
    e.preventDefault();
    var todo = this.refs.todo.value;
    var itemArr = this.props.item

    itemArr.push(todo)
    // console.log(itemArr);

    this.props.items(itemArr);
    this.refs.todo.value = ''

  },
  render:function () {
    return(
      <div>
        <form onSubmit={this.toDoAdder}>
          <input type="text" className="form-control" placeholder="enter your to-do" ref="todo" required/>
          <input type="submit" className="btn btn-primary btn-block" value="add to-do"/>
        </form>
      </div>
    )
  }
})

// LIST COMPONENT ---------------------------------
var ToDoList = React.createClass({  
  render:function(){
  return(
      <div>
        <ul className="list-group">
            {this.props.lists.map((val,index) => {
              return(
                <li className="list-group-item" key={val+index}>
                  {val}
                  <span className="badge">x</span>
                </li>
              )
            })}
        </ul>
      </div>
    )}
})

// APP COMPONENT-------------------------------
var App = React.createClass({
  getInitialState: function () {
    return{
      item: []
    }
  },
  todoShow: function (arr) {
    this.setState({
      item: arr
    })
   },
  render: function () {
    return(
      <div className="container">
        <div className="row">
          <div className=" col-xs-offset-3 col-xs-6">
            <Title/>
            <Form item={this.state.item} items={this.todoShow}/>
            <ToDoList lists={this.state.item}/>
          </div>
        </div>
      </div>
    )
  }
})

export default App;

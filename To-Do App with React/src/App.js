import React, { Component } from 'react';
import './App.css';
//TITLE COMPONENT------------------------------
function Title(props) {
  return (
    <h1 className="text-center">A Simple To-Do app</h1>
  )
}

// FORM COMPONENT--------------------------------
var Form = React.createClass({
  toDoAdder: function (e) {
    e.preventDefault();
    var todo = this.refs.todo.value;
    var itemArr = this.props.item;

    itemArr.push(todo)
    this.props.items(itemArr);
    this.refs.todo.value = ''
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.toDoAdder}>
          <input type="text" className="form-control" placeholder="enter your to-do" ref="todo" required />
          <input type="submit" className="btn btn-primary btn-block" value="add to-do" />
        </form>
      </div>
    )
  }
})

// LIST COMPONENT ---------------------------------
const ToDoList = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.lists.map((val, index) => {
          return (
            <li className="list-group-item" key={index}>
              {val}
              <span className="badge" onClick={props.removeTasks.bind(this, index)}>x</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// APP COMPONENT-------------------------------
class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      item: [],
    })
    this.todoShow = this.todoShow.bind(this);
    this.removeTasks = this.removeTasks.bind(this);
  }

  todoShow(arr) {
    this.setState({
      item: arr
    })
  }

  removeTasks(index) {
    console.log(this.state.item);
    let itemArray = this.state.item;
    itemArray.splice(index, 1); // remove the item then set new state
    this.setState({
      item: itemArray,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-xs-offset-3 col-xs-6">
            <Title />
            <Form item={this.state.item} items={this.todoShow} />
            <ToDoList lists={this.state.item} removeTasks={this.removeTasks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
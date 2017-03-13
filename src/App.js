import * as React from 'react';
import './App.css';

// GREETING COMPONENT----------------------------
var MyGreeting = React.createClass({
  render: function () {
    return(
      <div>
        <h1 className="text-center">Hi {this.props.name}</h1>
        <p className="lead text-center">{this.props.message}</p> 
      </div>
    )
  }
})

// FORM COMPONENT ---------------------------
var MyForm = React.createClass({
  changeName: function (e) {
      e.preventDefault();      
      var name = this.refs.name.value;
      var message = this.refs.message.value;
      console.log(`${name} -- ${message}`); 
      if(name.length === 0 || message.lenght === 0){
        name = "pls enter your name";
        message = "pls enter your message"
      }
      var obj = {
        name: name,
        message: message
      }
      this.props.onState(obj)
      this.refs.name.value = '';
      this.refs.message.value = '';      
  },
  render:function () { 
    return(
      <form onSubmit={this.changeName}>
        <input type="text" placeholder="enter your name" className="form-control" ref="name" required/>
        <br/>
        <input type="text" placeholder="enter your message" className="form-control" ref="message" required/>
        <br/>
        <input type="submit" className="btn btn-primary" value="submit"/>
      </form>
    )
   }
})

// APP COMPONENT-------------------------------
var App = React.createClass({
  getDefaultProps: function () {
    return {
      name: "Mahaveer",
      message: "this is a default message"
    }
   },
   getInitialState: function () {
     return {
       name: this.props.name,
       message: this.props.message       
     }
   },
   stateSetter: function (obj) {  
     this.setState({
      name: obj.name,
      message: obj.message
     })
   },
  render: function () {
    return(
      <div className="container">
        <div className="jumbotron">
          <MyGreeting name={this.state.name} message={this.state.message}/>
          <MyForm onState={this.stateSetter}/>
        </div>
      </div>
    )
  }
})

export default App;

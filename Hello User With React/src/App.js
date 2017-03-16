import * as React from 'react';
import './App.css';

// GREETING COMPONENT----------------------------
function MyGreeting(props) {
  return (
    <div>
      <h1 className="text-center">Hi {props.name}</h1>
      <p className="lead text-center">{props.message}</p>
    </div>
  )
}

// FORM COMPONENT ---------------------------
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this)
  }
  changeName(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    console.log(`${name} -- ${message}`);
    if (name.length === 0 || message.lenght === 0) {
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
  }
  render() {
    return (
      <form onSubmit={this.changeName}>
        <input type="text" placeholder="enter your name" className="form-control" ref="name" required />
        <br />
        <input type="text" placeholder="enter your message" className="form-control" ref="message" required />
        <br />
        <input type="submit" className="btn btn-primary" value="submit" />
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = ({
      name: "mahaveer",
      message: "a default message"
    })
    this.state = ({
      name: this.props.name,
      message: this.props.message
    })
    this.stateSetter = this.stateSetter.bind(this)
  }
  stateSetter(obj) {
    this.setState({
      name: obj.name,
      message: obj.message
    })
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <MyGreeting name={this.state.name} message={this.state.message} />
          <MyForm onState={this.stateSetter} />
        </div>
      </div>
    )
  }
}
export default App;

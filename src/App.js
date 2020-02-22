import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';
import Registro from './components/Registro/Registro';
import login from './components/login/login';
import inicio from './components/inicio/inicio';


class App extends Component {
 

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Ir a la biblioteca',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Ir a comer con mi madre',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Salir a correr',
        completed: false
      },
    ]
  }

  // mark complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }


  //delete todo

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //add todo
  addTodo=(title) => {
    const newTodo={
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }


  render() {
    return (
      <Router>
      <div className="App">
         
        <div className="container">
          <Header />
          <Route exact path="/inicio" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos}
                markComplete={this.markComplete}
            delTodo={this.delTodo} />
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/login" component={login}/>
          <Route exact path="/" component={inicio}/>
        </div>
      </div>
      </Router>
    );

  }

}

export default App;

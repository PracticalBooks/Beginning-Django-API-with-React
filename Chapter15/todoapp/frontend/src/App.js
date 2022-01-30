import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTodo from './components/add-todo';
import TodosList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';

function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState('');

  async function login(user = null){ // default user to null
    setUser(user);
  }

  async function logout(){
    setUser(null);
  }

  async function signup(user = null){ // default user to null
    setUser(user);
  }
  
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>TodosApp</Navbar.Brand>
          <Nav className="me-auto">
            <Container>
              <Link class="nav-link" to={"/todos"}>Todos</Link>
              { user ? (
                <Link class="nav-link">Logout ({user})</Link>
              ) : (
                <>
                  <Link class="nav-link" to={"/login"}>Login</Link>
                  <Link class="nav-link" to={"/signup"}>Sign Up</Link>
                </>
              )}
            </Container>
          </Nav>
        </div>
      </Navbar>
      
      <div className="container mt-4">
        <Switch>	
          <Route exact path={["/", "/todos"]} render={(props) =>
            <TodosList {...props} token={token} />
          }>
          </Route>
          <Route path="/todos/create" render={(props)=> 
            <AddTodo {...props} token={token} />
          }>
          </Route>
          <Route path="/todos/:id/" render={(props)=> 
            <AddTodo {...props} token={token} />
          }>
          </Route>
          <Route path="/login" render={(props)=> 
            <Login {...props} login={login} />
          }>
          </Route>
          <Route path="/signup" render={(props)=> 
            <Signup {...props} signup={signup} />
          }>
          </Route>
        </Switch>
      </div>
      
      <footer className="text-center text-lg-start 
        bg-light text-muted mt-4">
        <div className="text-center p-4">
          © Copyright - <a 
            target="_blank" 
            className="text-reset fw-bold text-decoration-none" 
            href="https://twitter.com/greglim81"
          >
            Greg Lim
          </a> - <a 
            target="_blank" 
            className="text-reset fw-bold text-decoration-none" 
            href="https://twitter.com/danielgarax"
          >
            Daniel Correa
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

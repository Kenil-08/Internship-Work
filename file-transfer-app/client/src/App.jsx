import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const handleLogin = (credentials) => {
    // Handle login logic
    console.log('Login:', credentials);
  };

  const handleRegister = (credentials) => {
    // Handle registration logic
    console.log('Register:', credentials);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">File Transfer App</h1>
            <div>
              <Link to="/login" className="text-white mx-2">Login</Link>
              <Link to="/register" className="text-white mx-2">Register</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register onRegister={handleRegister} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

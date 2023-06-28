import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { Login } from './containers/Login/Login';
import { Register } from './containers/Login/Register';
import { ForgotPassword } from './containers/Login/ForgotPassword';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : 
        ( currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <ForgotPassword onFormSwitch={toggleForm} /> )
      }
    </div>
  );
}

export default App;

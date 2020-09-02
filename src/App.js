import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/insurance/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/login/Form';
import EmailForm from './component/email/Form';



function App() {
  return (
    <div className="divStyle">

      <Form/>
      <LoginForm/>
      <EmailForm/>
      
      
      
       
    </div>

  );
}

export default App;

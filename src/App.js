import React from 'react';
import './App.css';
import Form from './component/insurance/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './component/login/Form';
import EmailForm from './component/email/Form';
import ProfileForm from './component/profile/Form';

function App() {
  return (
    <div className="divStyle">
      <div className="row">
        <div className="col">
          <LoginForm />
        </div>
        <div className="col">
          <EmailForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form />
        </div>
        <div className="col">
        <ProfileForm/>
      </div>
    </div>
    </div>
  );
}

export default App;

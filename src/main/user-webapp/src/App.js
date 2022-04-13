import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginComponent from './components/login-component';
import SignUpComponent from './components/signup-component';

function App() {
  return (
    <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}><label className='label-nav'>BONA FIDE</label></Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}><label className='label-nav-list'>Login</label></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}><label className='label-nav-list'>SignUp</label></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path='/' element={<LoginComponent/>} />
                <Route path="/bona-fide-user-webapp/" element={<LoginComponent/>} />
                <Route path="/sign-in" element={<LoginComponent/>} />
                <Route path="/sign-up" element={<SignUpComponent/>} />
              </Routes>
            </div>
          </div>
        </div></Router>
  );
}

export default App;
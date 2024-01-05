import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Registration from './compents/signup';
import Login from './compents/login';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './assets/style/sign.css';
import './assets/style/login.css';
import './assets/style/AboutPage.css';
import HomePage from './compents/HomePage';
import './assets/style/HomePage.css';
import AboutPage from './compents/AboutPage';
import Contact from './compents/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Aero Trip
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutpage">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
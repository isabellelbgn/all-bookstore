import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';


export default function App() {
  return (
    <Router>
    <div>
      <Signup/>
    </div>
    </Router>
  )
}
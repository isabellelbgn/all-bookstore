import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Login } from './pages/Login';


export default function App() {
  return (
    <Router>
    <div>
      <Login/>
    </div>
    </Router>
  )
}
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Router>
    <div>
      <Navigation/>
    </div>
    </Router>
  )
}
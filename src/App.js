import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route exact path='/' component={Footer} />
    </React.Fragment>
  );
}

export default App;

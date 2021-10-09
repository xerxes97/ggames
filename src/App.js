import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Games from './pages/games/Games';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route path='/games/:option' component={Games} />
      <Route path='/' component={Footer} />
    </React.Fragment>
  );
}

export default App;

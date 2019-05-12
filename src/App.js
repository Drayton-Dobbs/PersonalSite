import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Jumbo1 from './Jumbo';
import Home from './home';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Route path="/home" render={
          () => {
            return (
              <Home />
            )
          }
        }>
        </Route>
        <Route path="/aboutMe" render={
          () => {
            return (
              <Home />
            )
          }
        }>
        </Route>



      </BrowserRouter>


    </div>
  );
}

export default App;

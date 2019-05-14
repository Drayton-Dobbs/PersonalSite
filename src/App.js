import React from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Jumbo1 from './Jumbo';
import Home from './home';
import AboutMe from './aboutMe';
import Resume from './Resume'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Route exact path="/" render={
          () => {
            return (
              <Home />
            )
          }
        }>
        </Route>
        <Route exact path="/aboutMe" render={
          () => {
            return (
              <AboutMe />
            )
          }
        }>
        </Route>
         
        <Route exact path="/resume" render={
          () => {
            return (
              <Resume />
            )
          }
        }>
        </Route>



      </BrowserRouter>


    </div>
  );
}

export default App;

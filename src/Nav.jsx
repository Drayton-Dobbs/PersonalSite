import React, { Component } from 'react';
import { Container } from 'react';
import { Link } from 'react-router-dom';



class Nav extends Component {
    constructor(props) {
        super(props);
    }
    handleEvent() {
        console.log(this.props);
    }
    render() {
        return (
     
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar"style={{color: 'black'}}  href="/">James Drayton Dobbs</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">



    


      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">


        <a className="dropdown-item" href="/aboutMe">About Me</a>
          <a className="dropdown-item" href="/resume">Resume</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>

        
        </div>
      </li>
    </ul>
   
  </div>
</nav>
            
        );
    }
}

export default Nav;

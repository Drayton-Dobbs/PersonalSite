import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Jumbo1 from './Jumbo';

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }
    handleEvent() {
        console.log(this.props);
    }
    render() {
        return (

           <div>
               <Nav />
               <Jumbo1 />
               <Footer />
              
               

           </div>

        );
    }
}

export default AboutMe;
import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Jumbo1 from './Jumbo';

class Resume extends Component {
    constructor(props) {
        super(props);
    }
    handleEvent() {
        console.log(this.props);
    }
    render() {
        return (

           <div>
               
         <h1>resume</h1>
         <Nav />
               <Jumbo1 />
               <Footer />

           </div>

        );
    }
}

export default Resume;
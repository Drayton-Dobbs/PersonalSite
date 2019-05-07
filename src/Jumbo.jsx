import React, { Component } from 'react';
import { Container } from 'react';

class Jumbo1 extends Component {
    constructor(props) {
        super(props);
    }
    handleEvent() {
        console.log(this.props);
    }
    render() {
        return (

            <div className="jumbotron jumbotron-fluid" style={{height: '90vh'}}>
            <div className="container">
              <h1 className="display-4">Fluid jumbotron</h1>
              <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
          </div>

        );
    }
}

export default Jumbo1;
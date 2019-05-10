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

            <div className="jumbotron jumbotron-fluid" style={{ height: '90vh' }}>
                <div className="container">
                    <div style={{display: 'flex'}}>
                        <h1 className="display-6">Dedicated and enthusiastic programming student. I am seeking an opportunity to use my skill-sets
                        to further my knowledge of software development in a professional setting.</h1>
                    </div>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>

        );
    }
}

export default Jumbo1;
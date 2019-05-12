import React, { Component } from 'react';
import { Container } from 'react';

import { bigIntLiteral } from '@babel/types';
import shoes from './Images/shoes.jpg';


class Jumbo1 extends Component {
    constructor(props) {
        super(props);
    }
    handleEvent() {
        console.log(this.props);
    }
    render() {
        return (

            <div className="jumbotron jumbotron-fluid" style={ { height: '90vh'} }>
                <div className="container">
                    <div style={{display: 'flex'}}>
                        <h1 className="display-6"></h1>
                    </div>
                </div>
            </div>

        );
    }
}

export default Jumbo1;
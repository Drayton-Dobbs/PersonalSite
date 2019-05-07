import React, { Component } from 'react';
import { Container } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    handleEvent() {
        console.log(this.props);
    }
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                <a className="navbar-brand" href="#">Footer: linkedIn, gitHub, insta.</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                    </ul>

                </div>
            </nav>

        );
    }
}

export default Footer;
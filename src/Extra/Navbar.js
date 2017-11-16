import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a id="sass" href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
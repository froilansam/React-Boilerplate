import React, { Component } from 'react';
import Preloader from './Extra/Preloader';
import Hero from './Extra/Hero';
import Header from './Extra/Header';


class App extends Component {
    constructor(props) {
        super(props);

        this.countClick = this.countClick.bind(this);

        this.state = {
            count: 0
        };
    }

    countClick() {
        this.setState({ count: this.state.count + 12 });
    }

    render() {
        var blueStyle = {
            color: 'blue',
            fontSize: '200px'
        };

        console.log('Rendering', this.state.count);

        return(
            <body>
               
                <Hero key="2"/>
                <Header key="3"/>
            </body>
        );
    }
}

export default App;
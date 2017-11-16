import React, { Component } from 'react';

class Extra extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>This component states the button was clicked {this.props.counter} times!</h2>
                <button onClick={this.props.handleClick}>Click me</button>
            </div>
        );
    }
}

export default Extra;
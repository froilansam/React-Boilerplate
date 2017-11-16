import React, { Component } from 'react';

class Extra2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Another component states the button was clicked {this.props.counter} times!</h2>
            </div>
        );
    }
}

export default Extra2;
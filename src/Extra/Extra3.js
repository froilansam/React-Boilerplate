import React, { Component } from 'react';

class Extra3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            staticUsername: '',
            staticPassword: ''
        };
    }

    render() {
        console.log('Rendering', this.state);

        return (
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={event => this.setState({ username: event.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={event => this.setState({ password: event.target.value })}
                />
                <button type="button" onClick={() => this.setState({ staticUsername: this.state.username, staticPassword: this.state.password, username: '', password: '' })}>Show me</button>
                <p>Your username is: {this.state.staticUsername}</p>
                <p>Your password is: {this.state.staticPassword}</p>
            </form>
        );
    }
}

export default Extra3;
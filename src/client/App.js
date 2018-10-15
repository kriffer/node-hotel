import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null, os: [null] };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username, os: user.os }));
  }

  render() {
    const { username, os } = this.state;
    return (
      <div>
        {username && os ? (
          <h1>{`Hello ${username}, your OS is ${os}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}

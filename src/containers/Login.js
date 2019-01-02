import React, { Component } from 'react';

const styles = {
  container : {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 28,
    lineHeight: '40px',
  },
  login: {
    width: 375,
    padding: 30,
  },
  logo: {
    textAlign: 'center',
    width: '100%',
    fontSize: 80,
    lineHeight: '100px',
  },
  input: {
    width: '100%',
    outlineWidth: 2,
    outlineStyle: 'solid',
    fontSize: 28,
    padding: 0,
    margin: 0,
  }
}

export default class Login extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.login}>
          <div style={styles.logo}>
            a.bit
          </div>
          <div>
            e-mail
          </div>
          <input style={styles.input} type="text">
          </input>
          <div>
            password
          </div>
          <input style={styles.input} type="password">
          </input>
        </div>
      </div>
    );
  }
}
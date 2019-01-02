import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrease, increase } from './actions';
import Login from './containers/Login';
import Table from './containers/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

  handleMinus() {
    this.props.decrease();
  }

  handlePlus() {
    this.props.increase();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      loggedIn ? <Table /> : <Login />
    );
  }
}

export default connect(
  state => state,
  { decrease, increase }
)(App);
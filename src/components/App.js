import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';
import { applyMiddleware } from 'redux';

class App extends Component  {
  render() {
    const props = this.props;
    return (
    <React.Fragment>
      <div>value: { this.state.value }</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </React.Fragment>
  )
  }
};

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = dispach => ({
  increment: () => dispach(increment()),
  decrement: () => dispach(decrement())
}); // const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)
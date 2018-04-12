/* eslint-disable */
import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'
import { Link, withRouter } from 'dva/router';
import styles from './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Link to="/xyz"><span className="nav-text">FirstPage xyz</span></Link>
        <Link to="/alone2"><span className="nav-text">Second Page</span></Link>

        { this.props.children }
      </div>)
  }
}
export default withRouter(connect(null, null)(App));

import React from 'react';

export default class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;
  }
 
  render() {
    return (
      <div>
        <a href="/#/">Home</a>
        &nbsp;
        <a href="/#/dashboard">Dashboard</a>
      </div>
    );
  }
}


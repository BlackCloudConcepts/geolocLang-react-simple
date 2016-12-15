import React from 'react';

// export const Dashboard = React.createClass({
export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;
  }
 
  render() {
    return (
      <div>
        My name is {this.props.name}!
      </div>
    );
  }
}


import React from 'react';
import Navigation from './navigation';

export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;
  }
 
  render() {
    return (
      <div>
         <div>
          <Navigation />
        </div>
        <div>
          My name is {this.props.name}!
        </div>
      </div>
    );
  }
}


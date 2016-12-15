import React from 'react';
import Navigation from './navigation';
import WordInput from './word-input';
import Map from './map';
import List from './list';

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
        <WordInput />
        <Map />
        <List />
      </div>
    );
  }
}


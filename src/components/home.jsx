import React from 'react';
import Navigation from './navigation';

export default class Home extends React.Component {
  
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
          geolocLang { <a href="https://github.com/BlackCloudConcepts/geolocLang-react-simple" target="_blank">View on Github</a> }
        </div>
      </div>
    );
  }
}


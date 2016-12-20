import styles from '../index.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions';

declare var google;

class Map extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.setMap(51.521251,-0.203586);
  }

  componentDidUpdate(){
    var loc = this.props.locations.last();
    this.setMap(loc.lat, loc.lng);
  }

  setMap(lat, lng) {
    var mapProp = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp); 
  }
 
  render() {
    return (
      <div className={styles.card}>
        <div id="googleMap" className={styles.map}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.getIn(['locations'])) {
    return { locations: state.getIn(['locations']) };
  } else {
    return { locations: [] };
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: ( state ) =>  {
      var words = {
        word1: word1.value,
        word2: word2.value,
        word3: word3.value
      };
      dispatch(actionCreators.addWords(words));
    }
  }
}

export const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

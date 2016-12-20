import styles from '../index.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }
 
  render() {
    return (
      <div className={styles.card}>
        <div>
          List of past searches
        </div>
        <div className={styles.listColumnMain+' '+styles.header}>Words</div>
        <div className={styles.listColumn+' '+styles.header}>Lat</div>
        <div className={styles.listColumn+' '+styles.header}>Lng</div>
        <div className={styles.clear}></div>
        {

        this.props.locations.map((item, i) => {
          return <div key={i}>
            <div className={styles.listColumnMain}>{item.word1} {item.word2} {item.word3}</div>
            <div className={styles.listColumn}>{item.lat}</div>
            <div className={styles.listColumn}>{item.lng}</div>
            <div className={styles.clear}></div>
          </div>;
        })

        }
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

export const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)


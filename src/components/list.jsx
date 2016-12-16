import styles from '../index.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      word1: 'a',
      word2: 'b',
      word3: 'c'
    };

  }
 
  render() {
    return (
      <div className={styles.card}>
        <div>
          List of Words
        </div>
        <div>
          {this.state.word1}        
        </div>
        <div>
          {this.state.word2}
        </div>
        <div>
          {this.state.word3}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  handleClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    word1: state.get('word1'),
    word2: state.get('word2'),
    word3: state.get('word3'),
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


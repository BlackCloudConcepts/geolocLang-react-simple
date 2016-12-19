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
          List of Words
        </div>
        <div>
          {this.props.word1}        
        </div>
        <div>
          {this.props.word2}
        </div>
        <div>
          {this.props.word3}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  handleClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  var obj = state.getIn(['locations', 0]);
  var ste = {
    word1: '',
    word2: '',
    word3: ''
  }
  if (obj){
    ste.word1 = obj.word1;
    ste.word2 = obj.word2;
    ste.word3 = obj.word3;
  }
  return {
    word1: ste.word1,
    word2: ste.word2,
    word3: ste.word3
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


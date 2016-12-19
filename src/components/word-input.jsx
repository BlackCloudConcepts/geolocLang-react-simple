import styles from '../index.scss';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions';

class WordInput extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
/*
    this.state = {
      word1: '',
      word2: '',
      word3: ''
    };
    this.handleChange = this.handleChange.bind(this);
*/
  }

/* 
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }
*/

  render() {
    const { handleClick } = this.props;
    return (
      <div className={styles.card}>
{/*
        <div>
          <input type="text" id="word1" size="50" onChange={this.handleChange} value={this.state.word1} />          
        </div>
        <div>
          <input type="text" id="word2" size="50" onChange={this.handleChange} value={this.state.word2} />          
        </div>
        <div>
          <input type="text" id="word3" size="50" onChange={this.handleChange} value={this.state.word3} />          
        </div>
*/}
        <div>
          <input type="text" id="word1" size="50" />          
        </div>
        <div>
          <input type="text" id="word2" size="50" />          
        </div>
        <div>
          <input type="text" id="word3" size="50" />          
        </div>
        <div>
          <button onClick={handleClick}>Find</button>
        </div>
        <div className={styles.hint}>
          Hints:
        </div>
        <div>
          overkill-unrealistic-binds
        </div>
        <div>
          kicks-pasta-steer
        </div>
        <div>
          index-home-raft
        </div>
      </div>
    );
  }
}

WordInput.propTypes = {
  handleClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return null;
/*
  return {
    word1: state.get('word1'),
    word2: state.get('word2'),
    word3: state.get('word3'),
  }
*/
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

export const WordInputContainer = connect(
  null,
  mapDispatchToProps
)(WordInput)


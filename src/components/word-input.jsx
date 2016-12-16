import styles from '../index.scss';
import React from 'react';
import { connect } from 'react-redux'
// import locationReducer from '../reducers/locations';
import * as actionCreators from '../actions';

export default class WordInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      word1: '',
      word2: '',
      word3: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkProps = this.checkProps.bind(this);

    this.localProps = React.cloneElement(this.props, { addWords: actionCreators.addWords });

    console.log(this.localProps);
  }
 
  handleSubmit () {
    console.log(this.state);
    console.log(actionCreators);
    console.log(store);
    actionCreators.addWords(this.state);
  }

  checkProps () {
    console.log(this.props);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    return (
      <div className={styles.card}>
        <div>
          <input type="text" id="word1" size="50" onChange={this.handleChange} value={this.state.word1} />          
        </div>
        <div>
          <input type="text" id="word2" size="50" onChange={this.handleChange} value={this.state.word2} />          
        </div>
        <div>
          <input type="text" id="word3" size="50" onChange={this.handleChange} value={this.state.word3} />          
        </div>
        <div>
          <button onClick={this.localProps.props.addWords}>Find</button>
        </div>
        <div>
          <button onClick={this.checkProps}>props</button>
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

const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  return {
    word1: state.get('word1'),
    word2: state.get('word2'),
    word3: state.get('word3'),
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: state =>  { console.log('handle submit'); dispatch(addWords(state.words)); }
/*
    handleSubmit: (state) => {
      console.log('handle submit');
      dispatch(state);
    }
*/
  }
}

export function setState(state) {
  return {
    type: 'SET',
    state
  };
}

export const WordInputContainer = connect(
  mapStateToProps,
  actionCreators
)(WordInput)


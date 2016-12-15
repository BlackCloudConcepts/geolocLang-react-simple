import styles from '../index.scss';
import React from 'react';

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
  }
 
  handleSubmit () {
    console.log(this.state);
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
          <button onClick={this.handleSubmit}>Find</button>
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


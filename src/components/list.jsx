import styles from '../index.scss';
import React from 'react';

export default class List extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;
  }
 
  render() {
    return (
      <div className={styles.card}>
        List!
      </div>
    );
  }
}


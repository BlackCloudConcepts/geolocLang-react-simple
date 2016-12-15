import styles from './index.scss';
import React from 'react';
import Dashboard from './components/dashboard';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;

    this.localProps = React.cloneElement(this.props, { name: 'Scott' });
  }

  render() {
    return (
      <div>
        <div>
          <h1>It Works!</h1>
          <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        </div>
        <div>
          <Dashboard name={this.localProps.props.name} />
        </div>
      </div>
    )
  }
}

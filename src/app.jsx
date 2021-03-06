import styles from './index.scss';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Dashboard from './components/dashboard';
import Home from './components/home';
import locationReducer from './reducers/locations';
import locationMiddleware from './middleware/locationsMiddleware';

const createStoreWithMiddleware = applyMiddleware(
  locationMiddleware()
)(createStore);

// const store = createStore(locationReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStoreWithMiddleware(locationReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;

//    this.localProps = React.cloneElement(this.props, { name: 'Scott' });

  }
/*
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
*/

  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Router> 
      </Provider> 
    )
  }

}

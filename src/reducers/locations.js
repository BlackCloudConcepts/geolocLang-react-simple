import {List, Map} from 'immutable';

/*
function setState(state, newState) {
  return state.merge(newState);
}
*/

function setLocation(state, location) {
  console.log('locations');
  console.log(location);
  var existingList = state.get('locations');
  if (existingList) {
    var mergedList = existingList.concat(List(location));
    return state.set('locations', mergedList);
  } else {
    return state.set('locations', List(location));
  }  
}

export default function addWords(state = Map(), action) {
  switch (action.type) {
    case 'SET':
      return setLocation(state, action.payload);
      //return setLocation(setState(state, action.state));
  }
  return state;
}

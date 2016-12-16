import {List, Map} from 'immutable';

function setLocation(state, location) {
  console.log('locations');
  console.log(location);
  var existingList = state.get('locations');
  if (existingList) {
    console.log('exitsing');
    var mergedList = existingList.concat(List(location));
    return state.set('locations', mergedList);
  } else {
    console.log('new');
    return state.set('locations', List(location));
  }  
}

export default function addWords(state = Map(), action) {
  switch (action.type) {
    case 'SET':
      return setLocation(state, action.payload);
  }
  return state;
}

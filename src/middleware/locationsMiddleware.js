import { config } from '../config';

function getLocationFromWords(words){
  var whatThreeWordsBaseForwardUrl = 'https://api.what3words.com/v2/forward?';
  var queryParams = '&display=full&format=json';
  var whatThreeWordsUrl = whatThreeWordsBaseForwardUrl +
    'addr=' + words.word1 + '.' + words.word2 + '.' + words.word3 +
    queryParams +
    '&key=' + config.whatThreeWordsKey;
  return $.getJSON(whatThreeWordsUrl);
}

export default locationMiddleware => store => next => action => {
  if (action.payload) {
    getLocationFromWords(action.payload[0]).then((data) => {
      action.payload[0].lat = data.geometry.lat;
      action.payload[0].lng = data.geometry.lng;
      next(action);
    });
  } else {
    return next(action);
  }
} 

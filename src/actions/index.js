import { config } from '../config';


function getLocationFromWords(words){
  var whatThreeWordsBaseForwardUrl = 'https://api.what3words.com/v2/forward?';
  var queryParams = '&display=full&format=json';
  var whatThreeWordsUrl = whatThreeWordsBaseForwardUrl +
    'addr=' + words.word1 + '.' + words.word2 + '.' + words.word3 + 
    queryParams +
    '&key=' + config.whatThreeWordsKey;
  return $.getJSON(whatThreeWordsUrl)
  .then((data) => {
    console.log(data);
  });
}


export function addWords(words) {
  getLocationFromWords(words);
  return {
    type: 'SET',
    payload: [
      words
    ]
  };
}

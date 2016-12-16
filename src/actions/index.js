export function addWords(words) {
  console.log('addWords');
  return {
    type: 'SET',
    payload: {
      words: words
    }
  };
}

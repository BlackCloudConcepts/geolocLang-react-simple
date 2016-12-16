export function addWords(words) {
  console.log('addWords called');
  return {
    type: 'SET',
    payload: {
      words: words
    }
  };
}

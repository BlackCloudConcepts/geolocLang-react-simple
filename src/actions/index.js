export function addWords(words) {
  return {
    type: 'SET',
    payload: [
      words
    ]
  };
}

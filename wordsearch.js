const wordSearch = (letters, word) => {

  // Check empty array/matrix or word cannot be found
  if (letters.length === 0 || letters[0].length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log(horizontalJoin);
  for (const l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }


  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  //console.log(verticalJoin);
  for (const l of verticalJoin) {
    if (l.includes(word))
      return true;
  }
  return false;// if word is not found
};
// from previous pair programming
const transpose = function(matrix) {
  const trx = matrix.length;
  const mtrx = matrix[0].length;

  const results = [];

  for (let m = 0; m < mtrx; m++) {
    const newMtrx = [];
    for (let i = 0; i < trx; i++) {
      newMtrx.push(matrix[i][m]);
    }
    results.push(newMtrx);
  }
  return results;
};

module.exports = wordSearch;

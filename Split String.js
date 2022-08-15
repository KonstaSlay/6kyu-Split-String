/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/


function splitString(string) {
  let arr = [];
  if (string == '') {
    return arr
  }

  else if (string.length % 2 !== 0) {
    string = string + '_';
    for (let i = 0; i < string.length; i += 2) {
      arr.push(string[i] + string[i + 2])}
    return arr

  } else {
      for (let i = 0; i < string.length; i += 2) {
        arr.push(string[i] + string[i + 2])}
      return arr
  }
}
  
console.log(splitString(''));
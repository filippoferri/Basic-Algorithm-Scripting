/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Here are some helpful links:

Global String Object
String.split()
Array.reverse()
Array.join()

*/

function reverseString(str) {
  var strReverse = str.split('').reverse().join('');
  return strReverse;
}

reverseString("hello");

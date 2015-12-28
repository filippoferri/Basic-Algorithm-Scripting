/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

Here are some helpful links:

String.split()
String.length

*/

function findLongestWord(str) {
    var newStr = str.split(" ");
    var longest = 0;
    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i].length > longest) {
            longest = newStr[i].length;
        }
    }
    return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

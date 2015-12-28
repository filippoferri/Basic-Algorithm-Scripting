/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links:

String.charAt()

*/

function titleCase(str) {
    var strLower = str.toLowerCase();
    var strSplit = strLower.split(' ');
    var newStr = [];
    for (var i = 0; i < strSplit.length; i++) {
        var strUp = strSplit[i].charAt(0);
        newStr[i] = strSplit[i].replace(strUp, strUp.toUpperCase());
    }

    return newStr.join(' ');
}

titleCase("I'm a little tea pot");

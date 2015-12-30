/*
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

Here are some helpful links:

Global String Object
*/
function repeat(str, num) {
    var repeatStr = "";
    while (num > 0) {
        repeatStr += str;
        num--;
    }
    return repeatStr;
}

repeat("abc", 3);

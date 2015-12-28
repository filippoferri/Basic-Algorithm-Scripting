/*

Check if a string (first argument) ends with the given target string (second argument).

Here are some helpful links:

String.substr()

*/

function end(str, target) {
    newTarget = target.length;
    var ending = str.substr(-newTarget);
    if (ending == target) {
        return true;
    } else {
        return false;
    }
}

end("Bastian", "n");

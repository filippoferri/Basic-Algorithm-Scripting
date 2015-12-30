/*
Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:

Boolean Objects
Array.filter()
*/
function bouncer(arr) {
    function falsyValues(value) {
        return Boolean(value);
    }
    return arr.filter(falsyValues);
}

bouncer([7, "ate", "", false, 9]);

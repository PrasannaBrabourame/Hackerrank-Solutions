/*
 * Create the function factorial here
 */

function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}
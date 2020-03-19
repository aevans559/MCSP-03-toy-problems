// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = (str) => {
    // create an array to store all brackets from string
    let open = [];
    let closed = [];
    // loop through string and push any instance of a bracket to array
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' ||
            str[i] === '{' ||
            str[i] === '[') {
                open.push(str[i])
            } else if (str[i] === ')' ||
                       str[i] === '}' ||
                       str[i] === ']') {
                        closed.push(str[i])
                       }
    }

    let par = open.filter(bracket => {
        bracket === '('
    });

    let parClosed = closed.filter( bracket => {
        bracket === ')'
    })

    let curl = open.filter(bracket => {
        bracket === '{'
    });

    let curlClosed = closed.filter( bracket => {
        bracket === '}'
    })

    let square = open.filter(bracket => {
        bracket === '['
    });

    let squareClosed = closed.filter( bracket => {
        bracket === ']'
    })

    if (open.length !== closed.length) {
        return false
    } else if (par.length !== parClosed.length ||
               curl.length !== curlClosed.length ||
               square.length !== squareClosed.length) {
        return false
    } else {
        return true;
    }
};
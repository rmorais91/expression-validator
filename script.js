// get values of the form and call given function
function getValues() {
    let inputExpression = document.getElementById("inputBox").value;

    if (inputExpression.length > 0 ){
        document.getElementById("info").innerHTML = given(inputExpression);
    } else {
        document.getElementById("info").innerHTML = 'Expression must have at least 1 character';
    }
}

// validate expression
function given(expression) {
    var listCharacters = [];

    // positions of the string
    for (let i = 0; i < expression.length; i++) {

        // puts the opening characters into an array
        if (expression[i] === '[' || expression[i] === '(' || expression[i] === '{') {
            // saves the character and position of the original expression
            var valueToPush = new Array();
            valueToPush[0] = expression[i];
            valueToPush[1] = [i];

            listCharacters.push(valueToPush);
        }
        // closing characters
        else if (expression[i] === ']' || expression[i] === ')' || expression[i] === '}') {
            // if array is empty or or the last position of the array is not pair
            if (listCharacters.length === 0 || listCharacters[listCharacters.length - 1][0] !== getPair(expression[i])) {
                return 'Position ' + i + ' not valid.';
            }
            // if it is pair, removes the last element from the array
            else {
                listCharacters.pop();
            }
        }
    }

    // Check if array is empty
    if (listCharacters.length === 0) {
        return 'Valid.';
    } else {
        return 'Position ' + listCharacters[0][1] + ' not valid.';
    }
}

// gets pair of the character
function getPair(x) {
    if (x === ']')
        return '[';
    else if (x === ')')
        return '(';
    if (x === '}')
        return '{';
}



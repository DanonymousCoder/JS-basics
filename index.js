// inline comments

/*
  multi-line comment
  test
  test

  test
*/
// Data types
let text = 'Ridwanullah'; // string
let num = 0; // number
let isTrue = true; // boolean
let nothing = undefined; // undefined
let a // null

// variables
let names = 'Coder';
names = 'DanonymousCoder'; // will change

const nAme = 'Code';
// nAme = 'Coder'; // Will not change

const slas= "This is a \"double quoted\" a \"double quote\" quote";

// Declaration
let me;

// assignment 
me = 'Coder';

// addition
let sum = 10 + 10;

// subtraction
let difference = 20 - 10;

// multiplication
let product = 2 * 2;

// division
let quotient = 2 * 2;

// increment a number
let increasOne = 10;
let increasTwo = 10;

increasOne = increasOne + 1; // 11
// alternatively
increasTwo++; // 11

// decrement a number
let decreasOne = 10;
let decreasTwo = 10;

decreasOne = decreasOne - 1; // 9
// alternatively
decreasTwo--; // 9

// Array
let fruits = ['apple', 'mango', 'pear'];

// bracket notation
fruits[0]; // apple

// objects 
let person = {
  names : 'Coder',
  age : 0
}

// Dot notation
person.names; // Coder

// Bracket notation
person[names]; // Coder

// function
function greet() {
  console.log('Hello world!');
}

greet(); // Hello world!

// function with parameter

function square(number) {
  return number * number;
}

square(2); // 4

// nextInLine function

function nextInLine(arr, item) {
    arr.push(item);

    return arr.shift();
}

let testArr = [1,2,3,4,5];

console.log(`Before: ${JSON.stringify(testArr)}`);
console.log(JSON.stringify(nextInLine(testArr, 6)));
console.log(`After: ${JSON.stringify(testArr)}`);

// comparison with double equality sign

function isEqual(val) {
    if (val == 3) {
        return "Equal";
    }

    return "Not Equal";
}

console.log(isEqual(3));

// comparison with triple equality sign

function strictEqual(val) {
    if (val === 3) {
        return "Equal";
    }

    return "Not Equal";
}

console.log(strictEqual('3'));

// Logical AND operator

function testNum(val) {

  if (val <= 50 && val >= 25) {
    return "Good";
  } 

  return "Bad"
}

// Logical OR operator

function testNumb(val) {

  if (val >= 50 || val <= 25) {
    return "Outside!";
  } 

  return "Inside!"
}

// Else statement

function testElse(val) {
  if (val > 10) {
    return "Big";
  } else {
    return "Small";
  }
}

// Elseif statement

function testElseIf(val) {
  if (val > 100) {
    return "Big"
  } else  if (val < 50) {
    return "Small"
  } else {
    return "Middle"
  }
}  

// First task - write a chained if/els statement

function taskOne(val) {
    if (val < 5) {
        return "Tiny";
    } else if (val < 10) {
        return "Small";
     }   else if (val < 15) {
        return "Medium";
     } else if (val < 20) {
        return "Large";
     } else {
        return "Huge";
     }
} 

// console.log(taskOne(7));


function switchOne(val) {
  let ans = "";

  // Switch statement

  switch(val) {
    case 1:
      ans = "Alpha";
      break;
    case 2:
      ans = "Beta";
      break;
    case 3:
      ans = "Gamma";
      break;
    case 4:
      ans = "Delta";
      break;
    default:
      ans = "Try again";
      break;
  }

  return ans;
}

console.log(switchOne(2));

function sequential(val) {
  let ans = "";

  switch(val) {
    case 1:
    case 2:
    case 3:
    case 4:
      ans ="low";
      break;
    case 5:
      ans = "middle";
      break;
    case 6:
    case 7:
    case 8:
    case 9:
      ans ="high";
      break;
    default:
      ans = "Try Again";
      break;
  }

  return ans
}

// console.log(sequential(6)); // high

// Task

function chainToSwitch(val)  {
  let ans  = "";

  switch(val) {
    case "bob":
      ans = "Marley";
      break;
    case 42:
      ans = "The Answer";
      break;
    case 1:
      ans = "There is no #1";
      break;
    case 99:
      ans = "Missed me by this much";
      break;
    case 7:
      ans = "Ate Nine";
      break;
    default:
      ans = "Try Again"
  }

  return ans;
}

// console.log(chainToSwitch(1)); // There is no #1

// return boolean

function returnBoolean(a, b) {

  return a > b;

}

// console.log(returnBoolean(10, 20)); // false

function testAB(a, b) {

  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}

// console.log(testAB(2, -2)); // undefined

let count = 0;

function cc(card) {

  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }

  let holdchoice = 'Hold';

  if (count > 0) {
    holdchoice = "Make a choice";
  } else {
    holdchoice = "DON'T EVEN DARE!"
  }

  return count + " " + holdchoice;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
// console.log(cc(4)); // -2 DON'T EVEN DARE!


// Objects

let ourCat = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

let myCat = {
  "name": "Cupcake",
  "legs": 6,
  "tails": 1.5,
  "friends": []
}
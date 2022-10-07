import { addTwoNumbers, divideTwoNumbers, substractTwoNumbers, timesTwoNumbers } from '../helpers/math-helpers';

let num1: number = 10;
let num2: number = 20;

let total: number = addTwoNumbers( num1, num2 );
let total2: number = substractTwoNumbers( num1, num2 );
let total3: number = timesTwoNumbers( num1,num2 );
let total4: number = divideTwoNumbers( num1, num2 );
console.log('add: ', total );
console.log('substract: ', total2 );
console.log('times: ', total3 );
console.log('Divide: ', total4 );
    

 
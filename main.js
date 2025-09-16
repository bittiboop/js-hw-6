
let age = prompt('Enter your age');
if(age <= 18){
    alert("You don't have access cause your age is " + age + ". It's less than 18");
}
else if(age > 18 && age < 60){
    alert("Welcome!");
}
else if(age > 60){
    alert("We recommend you to rest");
}
let a = +prompt('Enter first number');
let b = +prompt('Enter second number');
let znak = prompt('Enter znak (+, -, *, /)');
switch(znak){
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        return a / b;
    default:
        alert('Error');
}

console.log('Numbers from 1 to 50:');
for(let i = 1; i <= 50; i++){
    console.log(i);
}

console.log("sum of numbers from 1 to 100:");
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);

while(true){
    let input = prompt("Enter something (type 'stop' to end):");
    if(input.toLowerCase() === 'stop'){
        break;
    }
    console.log("You entered: " + input);
}

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
let number = +prompt("Enter a number to check if it's prime:");
if(isPrime(number)){
    console.log(number + " is a prime number.");
}
else{
    console.log(number + " is not a prime number.");
}

function reverseString(str){
    return str.split('').reverse().join('');
}
console.log("Reversed string: " + reverseString('JavaScript'));

function getFactorial(num){
    if(num < 0) return -1;
    if(num === 0) return 1;
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact *= i;
    }
    return fact;
}
let factNum = +prompt("Enter a number to get its factorial:");
console.log("Factorial of " + factNum + " is " + getFactorial(factNum));



//game "Guess the Number"
let randomNum = Math.floor(Math.random() * 100) + 1;
let guess = null;
while(guess !== randomNum){
    guess = +prompt("Guess a number between 1 and 100:");
    if(guess === randomNum){
        alert("Congratulations! You guessed the number.");
    }
    else if(guess < randomNum){
        alert("Try again! The number is higher.");
    }
    else{
        alert("Try again! The number is lower.");
    }
}

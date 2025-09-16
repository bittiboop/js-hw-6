
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

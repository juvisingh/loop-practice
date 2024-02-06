var i = 0;
//sum of every number from 1 to 1000
var everySum = 0;
for (i = 0; i < 1001; i ++) {
    everySum += i;
}
console.log(everySum);

//sum of the first 10 natural numbers
var naturalSum = 0;
for (i = 0; i < 11; i ++) {
    naturalSum += i;
}
console.log(naturalSum);

//sum of every odd number from 93 to 845
var oddNumSum = 0;
for (i = 93; i <= 845; i += 2) {
    oddNumSum += i
}
console.log(oddNumSum);

//sum of odd numbers from the first 10 natural numbers
var oddNatSum = 0
for (i = 1; i < 11; i+= 2) {
    oddNatSum += i
}
console.log(oddNatSum)

//product of every number that is divisible by 6 from 1 to 400
var divSixNum = 1;
for (i = 1; i <= 400; i++) {
    if(i % 6 == 0) {
        divSixNum *= i;
    }
}
console.log(divSixNum)

//determine if an input is prime or not
var userNumber = Number(prompt('Enter a number to check if it is prime or not: '));
var primeOrNot = true;
if (userNumber > 0) {
    if (userNumber == 1) {
        primeOrNot = false;
    }
    else {
        for (i = 2; i < userNumber; i ++) {
            if (userNumber % i == 0) {
                primeOrNot = false;
        }
    }
}
}
else {
    primeOrNot = false;
}
if (primeOrNot == false) {
    console.log(userNumber + " is not prime.")
}
else {
    console.log(userNumber + " is prime.")
}

//every prime number from 1 to 100- THIS ONE
var primeNumbers = []
for (var begNum = 2; begNum <=100; begNum++){
    var prime = true;
    for (var i = 2; i < begNum; i ++) {
        if (begNum % i == 0) {
            prime = false;
        }
    }
    if (prime == true) {
        primeNumbers.push(begNum)
    }
}
console.log(primeNumbers)

//factorial of a number that is input
var facNum = Number(prompt('Enter in a number to find the factorial of: '));
var facAnswer;
if (facNum == 0) {
    facAnswer = 1;
}
else {
    facAnswer = 1;
    while (facNum > 0) {
        facAnswer *= facNum;
        facNum -= 1;
    }
}
console.log('The answer is ' + facAnswer + ".");

//the greatest common factor of any 2 input numbers
var gcfOne = Number(prompt('Enter in the first number: '));
var gcfTwo = Number(prompt('Enter in the second number: '));
var largestNum = gcfTwo;
var gcf;
if (gcfOne > gcfTwo) {
    largestNum = gcfOne;
}
for (i = 2; i < largestNum; i++) {
    if ((gcfOne % i == 0) && (gcfTwo % i == 0)) [
        gcf = i
    ]
}
console.log('The GCF is ' + gcf + '.')

//create a diamond of size (input)
var sizeOfDiamond = Number(prompt('Enter in the size of the diamond: '));
var diamond = '*'
for (i = 1; i <= sizeOfDiamond; i ++) {
    console.log(diamond.repeat(i));
}
 
//create a triangle of size (input)
var sizeOfTriangle = Number(prompt('Enter in the size of the triangle: '));
var triangle = '*'
for (i = 1; i <= sizeOfTriangle; i ++) {
    console.log(triangle.repeat(i));
}
for (i = sizeOfTriangle - 1; i > 0; i --) {
    console.log(triangle.repeat(i));
}

//calculate the series of addition
var seriesOfNum = Number(prompt('Enter a number you would like to calculate the series of: '));
var runningTotal = 0;
var numRuns = 0;
function getNumber(numRuns) {
    var holderNum = 0;
    for (var i = numRuns; i > 0; i --){
        while (numRuns > 0) {
            holderNum += numRuns
            numRuns -= 1;
        }
    }
    return holderNum
}
for (var i = seriesOfNum; i > 0; i-=1){
    runningTotal += getNumber(i)
}

console.log('The answer is ' + runningTotal + '.')

//fill out the Fibonacci series- ask how to be printed
var fibNum = Number(prompt('Enter the number you would like to make the Fibonacci series of: '));
const fibArray = [0, 1]
var fibValue = 0;
for (var i = 0; i < fibNum - 2; i++){
    fibValue = fibArray[i] + fibArray[i+1]
    fibArray.push(fibValue)
}
console.log(fibArray);

//square made of the [input]
var sqaureNum = Number(prompt('Enter the number you would like to make squares out of: '));
var listOfNumbers = " "
var done = false;
var needFirst = true;
for (var i = sqaureNum; i > 0; i--) {
    listOfNumbers += i
}
for (var i = 0; i < sqaureNum + 1; i++) {
    listOfNumbers += i
}
var indexOfZero = listOfNumbers.indexOf("0");
while (done == false) {
    if (needFirst = true) {
        var value = listOfNumbers.substring(indexOfZero)
        console.log(value)
    }
    for (var i = 0; i < sqaureNum; i++){
        var printing = listOfNumbers.substring(indexOfZero- (i + 1), listOfNumbers.length - (i + 1))
        console.log(printing)
        if (i + 1 == sqaureNum) {
            done = true;
        }
    }
    needFirst = false;
}

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
var divSixNum = 0;
for (i = 0; i < 401; i++) {
    if(i % 6 == 0) {
        divSixNum *= i;
    }
}
console.log(divSixNum)



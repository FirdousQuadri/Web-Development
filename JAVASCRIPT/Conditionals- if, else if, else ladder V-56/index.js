console.log("Hey i am conditional tutorial")

let age = 3;
let grace = 2;
age+=grace;
console.log(age);
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace); /* (** is called as exponentiation - its 3 to the power 2=9) */
console.log(age % grace); 
if ((age + grace) > 18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

// (There are other assignment operators also such as ==, !=, ===[eual value and type],
// !==[not equal value or not equal type], >, <, >=, <=, ?[ternary operator])

// (There are some logical operators as well &&[logical and], ||[logical or], ![logical not])
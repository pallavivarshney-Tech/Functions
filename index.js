console.log("working");


// question 1
// Create one function with zero parameter having a console statement;

function myFunction() {
    console.log("I am printing a function with zero parameter");
  }
  myFunction();


//   question 2
//   Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(x,y,z) {
   
   console.log(x+y+z);
  }
 sum(10,20,30);

// question 3  
//  Create one arrow function

const thisFunction = () => {
  console.log("I am printing Fat Arrow function");
}
thisFunction();
  


// Question 4
// Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
//we will receive an output as undefined, because of hoisting taking place.


// Question 5
//"Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//The output will be undefined here.

// question 6
// Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    let number = 1;
    for (let i = 1; i <= n; i++) {
      number = number * i;
    }
    console.log(number);
  }
  factorial(12);


  //Question 7
  // Write a function that accepts parameter n and returns factorial of n

  const factorial = (n) => {
    let fact = 1;
    if(n<=0)
    {
        console.log("Not a valid Number");
    }
    else
    {
       
        for(let i=n ; i>0; i--)
        {
            fact *= i;
        }
    }
    return fact;
 }


console.log(factorial(12));


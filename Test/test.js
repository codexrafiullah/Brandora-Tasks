// test

// function rafi (a,b){
//     return a + b;
// }

// let rafi1 = (a,b) => a + b;

// let a =2;
// let b = 3;

// let result = rafi(a,b);
// console.log(result);

// let result1 = rafi1(a,b);
// console.log(result);


// let number = 3;
// let result = 0;
// for (let i=1; i<=10; i++){
//      result = number * i;
//      if(result%2===0){
//         console.log(result,"even number");
//      }else{
//         console.log(result,"odd number");
//      }
// }


function table() {
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    if (result % 2 === 0) {
      console.log(result, "even number");
    } else {
      console.log(result, "odd number");
    }
  }
}

let number = parseInt(prompt("Enter a number to print a Table"));
table();

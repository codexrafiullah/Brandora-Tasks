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


// function table(){
//   let number = 3;
// let result = 0;
// for (let i=1; i<=10; i++){
//      result = number * i;
//      if(result%2===0){
//         console.log(result,"even number");
//      }else{
//         console.log(result,"odd number");
//      }
// }
// }
// let number = 3;
// table();


// const condition = (result) => {
//   if (result % 2 === 0) {
//     return(result + "  even number");
//   } else {
//     return(result + "  odd number");
//   }
// }

// function table() {
//   for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     console.log(condition(result));
//   }
// }

// let number = 3;
// table();



// let arr1 = [1,2,3,4,5,6,7,8,9];

// let evenArr = arr1.filter((val) => {
//   return val%2===0;
// })
// console.log(evenArr);

// let arr2 = [1,2,3,4,5,6,7,8,9];
// let evenNum = arr2.filter(val => val%2 === 0)
// console.log(evenNum);


while(true){
   let age = parseInt(prompt("Enter your age"))
   if (age < 18){
       alert("Sorry you are not Eligible for License")
       break;
   }else if(age >= 18){
       alert("Now select your Gender")
       let Gender = prompt("Enter your Gender");
   
       if(Gender === "Male" || Gender === "male" ){
           alert(`You are Eligible for License`)
       }else if (Gender === "Female" || Gender === "female"){
           alert("Sorry you are not Eligible for License")
       }
   }
   }

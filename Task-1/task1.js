
let number = prompt("Enter a number");
console.log("Multiplication table of : ", number);

let TotalPrimeNo = 0;

for (let num = 1; num <= 10; num++) {
  let result = number * num;
  let Count = 0;

  if (result > 1) {
    for (let k = 1; k <= result; k++) {
      if (result % k === 0) {
        Count++;
      }
    }
  }

  if (Count === 2) {
    console.log( number,"X",num," = ", result, "(Prime Number)")
    TotalPrimeNo++;
  } else {
    console.log( number,"X",num," = ", result)
  }
}

console.log("Total prime numbers in the table: ", TotalPrimeNo);

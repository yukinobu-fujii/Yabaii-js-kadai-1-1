let Fizz = 3;
let Buzz = 5;
let FizzBuzz = Fizz * Buzz;
for (let i = 1; i < 100; i++){
  if (i % FizzBuzz === 0) {
    console.log(`FizzBuzz ${i}`);
  } else if (i % Buzz === 0) {
    console.log(`Buzz ${i}`);
  } else if (i % Fizz === 0){
    console.log(`Fizz ${i}`);
  }
}


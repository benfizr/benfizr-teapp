// Helper function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
  }
  
  // Main function to demonstrate the helper function
  function main() {
    // Input number
    let inputNumber = 7;
  
    // Check if the number is even using the helper function
    let isEvenResult = isEven(inputNumber);
  
    // Display the result
    if (isEvenResult) {
      console.log(`${inputNumber} is an even number.`);
    } else {
      console.log(`${inputNumber} is an odd number.`);
    }
  }
  
  // Call the main function to run the code
  main();
  
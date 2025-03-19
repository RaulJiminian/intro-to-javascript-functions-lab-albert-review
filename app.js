/*
  ✨ Code Review & Refactor Suggestions ✨
  Great job on these exercises! The comments and slight code updates below 
  are just to show different ways to solve the same problem. 
  What truly matters is getting to a working solution! 

  That said, reviewing refactored code can help you become a stronger developer over time. 
  Clean, efficient, and readable code makes collaboration and debugging easier. 
  Keep up the great work! 🚀
*/

// Great use of an arrow function and clear logic!
// Here's an alternative using a ternary operator to make it more concise.
const isAdult = (age) => (age >= 18 ? "Adult" : "Minor");
console.log("Exercise 2 Result:", isAdult(22));

/* Exercise 3: isCharAVowel() */
// Nice work checking for vowels!
// Consider using an array and the `.includes()` method to make it cleaner.
const isCharAVowel = (character) =>
  ["a", "e", "i", "o", "u"].includes(character);
console.log("Exercise 3 Result:", isCharAVowel("e"));

/* Exercise 4: generateEmail() */
// Good job constructing the email string!
// Instead of `+`, template literals (`${}`) provide better readability.
const generateEmail = (name, domain) => `${name}@${domain}`;
console.log(
  "Exercise 4 Result:",
  generateEmail("frank", "GeneralAssembly.com")
);

/* Exercise 5: greetUser() */
// Well-structured function! Using template literals makes this even clearer.
const greetUser = (name, timeOfDay) => `${timeOfDay}, ${name}!`;
console.log("Exercise 5 Result:", greetUser("Jenny", "Good evening"));

/* Exercise 6: maxOfThree */
// Well done! One enhancement: using `Math.max()`, which is built for this.
const maxOfThree = (a, b, c) => Math.max(a, b, c);
console.log("Exercise 6 Result:", maxOfThree(10, 50, 25));

/* Exercise 7: calculateTip */
// Great job! In JavaScript, variable names typically don't start with `$`, so renaming them improves readability.
const calculateTip = (bill, tip) => bill * (tip / 100);
console.log("Exercise 7 Result:", calculateTip(100, 30));

/* Exercise 8: convertTemperature() */
// Smart approach to temperature conversion!
// Adding a default return statement ensures function always returns a value.
const convertTemperature = (temperature, scale) => {
  if (scale === "F") {
    return (temperature - 32) * (5 / 9);
  } else if (scale === "C") {
    return temperature * (9 / 5) + 32;
  }
  return "Invalid scale"; // Prevents undefined return
};
console.log("Exercise 8 Result:", convertTemperature(32, "F"));

/* Exercise 9: basicCalculator() */
// Great job handling different operations!
// Using a `switch` statement can improve readability and performance.
const basicCalculator = (x, y, operation) => {
  switch (operation) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    default:
      return "Invalid operation";
  }
};
console.log("Exercise 9 Result:", basicCalculator(10, 5, "divide"));

/ Exercise 2: isAdult */;
const isAdult = (age) => {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
};
console.log("Exercise 2 Result:", isAdult(22));

/ Exercise 3: isCharAVowel() */;
const isCharAVowel = (character) => {
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    return true;
  } else {
    return false;
  }
};
console.log("Exercise 3 Result:", isCharAVowel("e"));

/ Exercise 4: generateEmail() */;
const generateEmail = (na_me, domain) => {
  return na_me + "@" + domain;
};
console.log(
  "Exercise 4 Result:",
  generateEmail("frank", "GeneralAssembly.com")
) * /Exercise 5: greetUser() */;
const greetUser = (name, timeOfday) => {
  return timeOfday + "," + "  " + name + "!";
};
console.log("Exercise 5 Result:", greetUser("Jenny", "Good evening")) *
  / Exercise 6: maxOfThree*/;
const maxOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log("Exercise 6 Result:", maxOfThree(10, 50, 25));

/ Exercise 7: calculateTip()*/;
const calculateTip = ($bill, $Tip) => {
  return $bill * ($Tip / 100);
};
console.log("Exercise 7 Result", calculateTip(100, 30));

/ Exercise 8: convertTemperature()*/;
const convertTemperature = (temperature, scale) => {
  if (scale === "F") {
    return (temperature - 32) * (5 / 9);
  } else if (scale === "C") {
    return temperature * (9 / 5) + 32;
  }
};
console.log("Exercise 8 Result:", convertTemperature(32, "F")) *
  / Exercise 9: basicCalculator() */;
const basicCalculator = (x, y, operation) => {
  if (operation === "add") {
    return x + y;
  } else if (operation === "subtract") {
    return x - y;
  } else if (operation === "multiply") {
    return x * y;
  } else if (operation === "divide") {
    return x / y;
  } else {
    return undefined;
  }
};
console.log("Exercise 9 Result:", basicCalculator(10, 5, "divide"));

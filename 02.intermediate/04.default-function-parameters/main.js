// Default function parameters, introduced in ECMAScript 6 (ES6),
// allow you to assign default values to function parameters. When a function is called,
// and an argument is not provided for a parameter, the default value will be used instead.
// This feature makes it easier to handle cases where arguments might be missing or undefined.

function countTo5(count = true) {
  if (count === true) {
    for (let i = 1; i <= 5; i++) {
      console.log(`Count: ${i}`);
    }
  }
}

countTo5(); // Count: 1, Count: 2,Count: 3, Count: 4, Count: 5
countTo5(false);

function ratings(rate) {
  if (rate === 5) {
    console.log(`High Ratings :)`);
  } else {
    console.log(`Low Ratings :(`);
  }
}

ratings(5); // High Ratings :)
ratings(); // Low Ratings :(
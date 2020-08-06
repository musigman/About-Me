'use strict';

// var userName = prompt('Hello! What is your name?');
// alert('Welcome to my page ' + userName);

// var doYouLikeCheese = prompt('Do you like cheese?');
// // console.log('Does the user like cheese?' + doYouLikeCheese);
// if (doYouLikeCheese.toLowerCase() === 'yes') {
//   alert('Awesome! I like cheese too!');
// } else {
//   alert('Bummer. You might be lactose intollerant');
// }

// var isSkyBlue = prompt('Is the sky blue?');
// // console.log('Is the sky blue?' + isSkyBlue);
// if (isSkyBlue.toLowerCase() === 'yes') {
//   alert('Yeah I think so too!');
// } else {
//   alert('Really...Is it gray?');
// }

// var mustardOnHotDog = prompt('Do you like mustard on hot dogs?');
// // console.log('Does the user like mustard on hotdogs?' + mustardOnHotDog);
// if (mustardOnHotDog.toLowerCase() === 'yes') {
//   alert('Sweet! So do I!');
// } else {
//   alert('Hmm..maybe try catchup');
// }

// var isMonthOfAugust = prompt('Is it the month of August');
// // console.log('It is the month of August?' + isMonthOfAugust);
// if (isMonthOfAugust.toLowerCase() === 'yes') {
//   alert('It\'s summer time!');
// } else {
//   alert('Winter must be on the way');
// }

// var isCodingFun = prompt('Is coding fun?');
// // console.log('Is coding fun?' + isCodingFun);
// if (isCodingFun.toLowerCase() === 'yes') {
//   alert('Hell yeah it is!');
// } else {
//   alert('Get out of here!!');
// }






// var favNumber = 3;
// var count = 0;
// while (count < 4) {
//   var userGuess = prompt('Can you guess my favorite number?');
//   console.log('Guessed favorite number: ' + userGuess);
//   if (parseInt(userGuess) === favNumber) {
//     alert('Congratulations!! You guessed my favorite number!')
//     break;
//   }
//   else if (parseInt(userGuess) > favNumber) {
//     count++;
//     alert('Whoa your a little big there! Try a smaller number')
//   } else if (parseInt(userGuess) < favNumber) {
//     count++;
//     alert('Hey smalls! Try a bigger number!')
//   }
// }

var pizzaToppings = ['cheese', 'pineapple', 'pepperoni', 'olives', 'tomatoes', 'sausage', 'peppers'];
var count = 0;
while (count < 6) {
  var userToppings = prompt('Can you guess what one of my favorite pizza toppings is?');
  console.log('Guessed pizza topping: ' + userToppings);
  for (var i = 0; i < pizzaToppings.length; i++) {
    if (userToppings.toLowerCase() === pizzaToppings[i]) {
      alert('Yes! That is one of my favoite toppings')
      count = 7;
      break;
    } else {
      count++;
      alert('No, sorry, ' + userToppings + 'isn\'t one of my favoite toppings. Try again.');
    }
  }
}












// alert('Once again...Welcome to my page ' + userName + '. I hope you can learn more about me here!');


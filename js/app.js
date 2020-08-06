'use strict';



function nameQuestion() {
  var userName = prompt('Hello! What is your name?');
  alert('Welcome to my page ' + userName);
}
nameQuestion();

function cheeseQuestion() {
  var doYouLikeCheese = prompt('Do you like cheese?');
  // console.log('Does the user like cheese?' + doYouLikeCheese);
  if (doYouLikeCheese.toLowerCase() === 'yes') {
    alert('Awesome! I like cheese too!');
  } else {
    alert('Bummer. You might be lactose intollerant');
  }
}
cheeseQuestion();

function skyQuestion() {
  var isSkyBlue = prompt('Is the sky blue?');
  // console.log('Is the sky blue?' + isSkyBlue);
  if (isSkyBlue.toLowerCase() === 'yes') {
    alert('Yeah I think so too!');
  } else {
    alert('Really...Is it gray?');
  }
}
skyQuestion();

function hotdogQuestion() {
  var mustardOnHotDog = prompt('Do you like mustard on hot dogs?');
  // console.log('Does the user like mustard on hotdogs?' + mustardOnHotDog);
  if (mustardOnHotDog.toLowerCase() === 'yes') {
    alert('Sweet! So do I!');
  } else {
    alert('Hmm..maybe try catchup');
  }
}
hotdogQuestion();

function monthQuestion() {
  var isMonthOfAugust = prompt('Is it the month of August');
  // console.log('It is the month of August?' + isMonthOfAugust);
  if (isMonthOfAugust.toLowerCase() === 'yes') {
    alert('It\'s summer time!');
  } else {
    alert('Winter must be on the way');
  }
}
monthQuestion();

function funCodeQuestion() {
  var isCodingFun = prompt('Is coding fun?');
  // console.log('Is coding fun?' + isCodingFun);
  if (isCodingFun.toLowerCase() === 'yes') {
    alert('Hell yeah it is!');
  } else {
    alert('Get out of here!!');
  }
}
funCodeQuestion();


function favNumGuess() {
  var favNumber = 3;
  var count = 0;
  while (count < 4) {
    var userGuess = prompt('Can you guess my favorite number?');
    console.log('Guessed favorite number: ' + userGuess);
    if (parseInt(userGuess) === favNumber) {
      alert('Congratulations!! You guessed my favorite number!')
      break;
    }
    else if (parseInt(userGuess) > favNumber) {
      count++;
      alert('Whoa your a little big there! Try a smaller number')
    } else if (parseInt(userGuess) < favNumber) {
      count++;
      alert('Hey smalls! Try a bigger number!')
    }
  }
}
favNumGuess();


var pizzaToppings = ['cheese', 'pineapple', 'pepperoni', 'olives', 'tomatoes', 'sausage', 'peppers'];
var attempts = 6
function favToppings() {
  for (var i = 0; i < attempts; i++) {
    var userResponse = prompt('Can you guess what one of my favorite pizza toppings is?').toLowerCase();
    if (userResponse === pizzaToppings[0] || pizzaToppings[1] || pizzaToppings[2] || pizzaToppings[3] || pizzaToppings[4] || pizzaToppings[5] || pizzaToppings[6] || pizzaToppings[7]) {
      alert('You are correct!');
      break;
    }
    else if (userResponse !== pizzaToppings) {
      alert('You are incorrect. Try again.')
    }
  }
}
favToppings();





alert('Once again...Welcome to my page ' + userName + '. I hope you can learn more about me here!');


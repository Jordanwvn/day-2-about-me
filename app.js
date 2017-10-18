'use strict'; //uses strict mode and eliminates type coersion

//Welcomes the user and saves their name for later use.
var user = prompt('Welcome to the page! This guy\'s name is Jordan. What\'s yours?');
console.log('User name:', user);

//responds to the user's input and describes the format of the guessing game.
alert('That\'s a great name. I\'m going to ask you a few questions in a yes / no format. For yes, you can input either \"y\" or \"yes\". For no, you can input either \"n\" or \"no\". it\'s totally up to you.');


//asks a trivia question about a the topic of the site. The answer is converted to lowercase before it is used.
var pageName = prompt('Is this page about Jordan?').toLowerCase();
console.log('Is this page about Jordan?', pageName);

//if the user is correct, they are congratulated. If they are incorrect, they are told they are wrong.
if (pageName === 'y' || pageName === 'yes') {
  alert('That is correct, of course. I just wanted to make sure you were paying attention.');
} else if (pageName === 'n' || pageName === 'no') {
  alert('Sorry, I think you may be overlooking the point of the page. These questions won\'t be getting easier, unfortunately. Let\'s just keep going, ok?');
} else { //if the user provides an invalid input, they are suggested to use it in the future.
  alert('were you paying attention to the prompt? You have to answer with either y/yes or n/no.');
}


//asks a trivia question about a Jordan's favorite band. The answer is converted to lowercase before it is used.
var favoriteBand = prompt('Do you think Jordan\'s favorite band makes good music?').toLowerCase();
console.log('Is Jordan\'s band good?', favoriteBand);

//if the user is correct, they are congratulated. If they are incorrect, they are told they are wrong.
if (favoriteBand === 'y' || favoriteBand === 'yes') {
  alert('Well joke\'s on you, he probably doesn\'t like them anymore because of that.');
} else if (favoriteBand === 'n' || favoriteBand === 'no') {
  alert('You\'re right. I have no idea why he listens to them in the first place.');
} else { //if the user provides an invalid input, they are suggested to use it in the future.
  alert('Come on, buddy, it\'s just a simple y/n format.');
}


//asks a trivia question about a Jordan being married. The answer is converted to lowercase before it is used.
var married = prompt('Do you think Jordan is married?').toLowerCase();
console.log('Is Jordan married?', married);

//if the user is correct, they are congratulated. If they are incorrect, they are told they are wrong.
if (married === 'y' || married === 'yes') {
  alert('I\'m not sure why you would think that, but you\'ll be right in about a year or so.');
} else if (married === 'n' || married === 'no') {
  alert('Good guess. But you\'ve only got about a year left to be proud of yourself for that one.');
} else { //if the user provides an invalid input, they are suggested to use it in the future.
  alert('Please use the y/n format. I promise it isn\'t difficult.');
}


//asks a trivia question about a Jordan having a degree. The answer is converted to lowercase before it is used.
var degree = prompt('Does Jordan have a degree?').toLowerCase();
console.log('Does Jordan have a degree?', degree);

//if the user is correct, they are congratulated. If they are incorrect, they are told they are wrong.
if (degree === 'y' || degree === 'yes') {
  alert('Hey, you read the page! Now whether or not that degree means anything is up to interpretation.');
} else if (degree === 'n' || degree === 'no') {
  alert('Actually, he surprisingly does. But don\'t worry, it isn\'t in programming.');
} else { //if the user provides an invalid input, they are suggested to use it in the future.
  alert('Well, if you\'re not going to use y/n now, I might as well give up on trying.');
}

//hints the user towards a trick question.
alert('Ok, ' + user + ', let\'s try something a bit more difficult...');


//asks a trivia question about a Jordan a swimmer. The answer is converted to lowercase before it is used.
var swimmerAnswer = prompt('Jordan was born on November 22nd, 1992. On that day, an Olympic swimmer broke the world record in the backstroke. Was it Louise Karlsson?').toLowerCase();
console.log('Did Louise set the rocord?', swimmerAnswer);

//if the user is correct, they are congratulated. If they are incorrect, they are told they are wrong.
if (swimmerAnswer === 'y' || swimmerAnswer === 'yes') {
  alert('Not quite. She set the record for the butterfly the day before. You must have had her confused with Sandra Volker.');
} else if (swimmerAnswer === 'n' || swimmerAnswer === 'no') {
  alert('Of course not! Everyone knows it was Sandra Volker.');
} else { //if the user provides an invalid input, they are suggested to use it in the future.
  alert('ok, really. It was a simple format. But now you\'re done and you\'ll never know the answers you skipped.');
}

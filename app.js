<<<<<<< HEAD
'use strict'; //uses strict mode and eliminates type coersion

//array of y/n questions, in order
var questionArray = ['Is this page about Jordan?', 'Do you think Jordan\'s favorite band makes good music?', 'Do you think Jordan is married?', 'does Jordan have a degree?', 'Jordan was born on November 22nd, 1992. On that day, an Olympic swimmer broke the world record in the backstroke. Was it Louise Karlsson?'];

//array of y/n answers, in order
var answerArray = ['yes', 'no', 'no', 'yes', 'no'];

//array of responses if the user answers correctly
var yesArray = ['That is correct, of course. I just wanted to make sure you were paying attention.', 'You\'re right. I have no idea why he listens to them in the first place.', 'Good guess. But you\'ve only got about a year left to be proud of yourself for that one.', 'Hey, you read the page! Now whether or not that degree means anything is up to interpretation.', 'Of course not! Everyone knows it was Sandra Volker.'];

//array of responses if the user answers incorrectly
var noArray = ['Sorry, I think you may be overlooking the point of the page. These questions won\'t be getting easier, unfortunately. Let\'s just keep going, ok?', 'Well joke\'s on you, he probably doesn\'t like them anymore because of that.', 'I\'m not sure why you would think that, but you\'ll be right in about a year or so.', 'Actually, he surprisingly does. But don\'t worry, it isn\'t in programming.', 'Not quite. She set the record for the butterfly the day before. You must have had her confused with Sandra Volker.'];

//counter to keep track of the number of correct answers
var correct = 0;

//Welcomes the user and saves their name for later use.
var user = prompt('Welcome to the page! This guy\'s name is Jordan. What\'s yours?');
console.log('User name:', user);

//responds to the user's input and describes the format of the guessing game.
alert('That\'s a great name. I\'m going to ask you a few questions in a yes / no format.');


//cycles through each question, comparing the input response to the correct answer
for (var i = 0; i < 5; i++) {

  //asks the question and then logs the response with a recyclable variable
  var response = prompt(questionArray[i]);
  console.log('question ' + i + ' response:', response);

  //if the response matches the answer, indicate and log that it was correct
  if (response.toLowerCase() === answerArray[i]) {
    alert(yesArray[i]);
    correct++;
    console.log('number of correct answers:', correct);

    //if the response does not match the answer, indicate that is was incorrect
  } else {
    alert(noArray[i]);
    console.log('number of correct answers:', correct);
  }
}

//welcomes the user to the next set of questions
alert('Ok, let\'s move on to some trickier questions. These ones won\'t be in the yes / no format.');


//sets a random number for use later
var rand = Math.round(Math.random() * (10 - 1) + 1);
console.log('the number I\'m thinking of',rand);

//defines variables to define the repeatition of the loop
var guesses = 4;
var numberGuessed = false;

//loop which asks user to guess the random number until they get it right or guess 4 times
while (guesses > 0 && numberGuessed === false) {
  var userNumberGuess = prompt('I\'m thinking of a number between 1 and 10. What do you think it is?');
  console.log('guessed number:', userNumberGuess);

  //if the guessed number is correct, the user is alerted and the loop ends
  if (parseInt(userNumberGuess) === rand) {
    alert('That\'s right! Good job!');
    correct++;
    console.log('number of correct answers:', correct);
    break;

    //tells the user how many guesses they have left
  } else {
    alert('Sorry, that wasn\'t right. You have ' + guesses + ' left.');
  } //end if ... else

  //reduces the number of guesses and logs it to the console for reference
  guesses--;
  console.log('number of guesses left:',guesses);
} //end while

//defines which answers are acceptable as a 'favorite genre'
var favoriteGenres = ['jazz', 'rock', 'classical', 'traditional tuvan throat singing'];
//console.log('favorite genres length:', favoriteGenres.length);

//defines variables to define the repeatition of the loop
guesses = 6;
var genreGuessed = false;

//loop asks user to guess a favorite genre of music until they get it right or guess 6 times
while (guesses > 0 && genreGuessed === false) {
  var musicGuess = prompt('What do you think one of my favorite genres of music to listen to is?');
  console.log('guessed genre:', musicGuess);


  //searches through the array to match the guess to a correct answer
  for (var j = 0; j < favoriteGenres.length; j++) {
    console.log('j:', j);

    //if the guess is correct, it is logged and displayed to the user
    if (musicGuess === favoriteGenres[j]) {
      alert('You got it!');
      correct++;
      genreGuessed = true;
      break;
    } //end if

  } //end for

  //reduces the number of guesses and tells the user how many they have left
  guesses--;
  if (genreGuessed === false) {
    alert('Sorry, that\'s not right. You have ' + guesses + ' guesses left.');
  } //end if

} //end while

alert('Good guessing! All of the possible answers were Jazz, Rock, Classical, and Traditional Tuvan Throat Singing');

//ends the quiz and congratulates the user on how many questions they got right
alert('Congratulations, ' + user + ', on getting ' + correct + ' correct answers!');
=======
'use strict';

// // getting user name
// var user = prompt('Welcome, friend! I appreciate that you have an interest in myself. Would you be so kind as to share your name?');
// console.log('user name:', user);
//
// // validation of user name entry
// alert('Good to know you, ' + user + ' c: I\'ve got an idea. On a whim, I feel like sharing a little bit about me since you took the time to come here. I\'m partial to games though, so please humor me and make a couple guesses. To keep it easier on us both for now, these will all be yes or no questions. Please answer accordingly!');

function question1(){
  // first question
  var lodging = prompt(user + ', do you feel that I\'d be interested in living out of a converted van or tiny home?');
  console.log('preferred residence? ', lodging);

  // validation that runs if user enters y/yes
  if (lodging.toLowerCase() === 'y' || lodging.toLowerCase() === 'yes') {
    alert('Correct! Lucky or perceptive? I guess we\'ll find out shortly... Round 2!');

  // validation that runs if user enters anything else
  } else {
    alert('Nope! No worries, coin flips are coin flips. Round 2!');
  }
}

function question2(){
  // 2nd question
  var arizona = prompt(user + ', do you feel like I\'m planning on living in Arizona one day?');
  console.log('dream of desert?', arizona);

  // 2nd question
  if (arizona.toLowerCase() === 'y' || arizona.toLowerCase() === 'yes') {
    alert('What?? Well I can\'t blame you for guessing that. I like water, water, and more water. Not the place for me. OK! Round 3, this should get much easier shortly.');

  // Q2 validation that runs if user enters anything else
  } else {
    alert('Good guess! I can\'t imagine how awful it would be to roast in the desert all day without AC or a big, airy home to keep me cool. OK! Round 3, this should get much easier shortly.');
  }
}

function question3(){
  // 3rd question
  var yoga = prompt(user + ', based off what you learned last time, do you think I\'m one to enjoy 105+ Farenheit hatha yoga?');
  console.log('yogi? ', yoga);

  // 3rd question validation if user enters y or yes
  if (yoga.toLowerCase() === 'y' || yoga.toLowerCase() === 'yes') {
    alert('Nice! I tried to trick you there, but you\'re apparently not one to be fooled so easily. Moving on...');

  // Q3 validation that runs if user enters anything else
  } else {
    alert('Ha! Tricked you. I might be avoidant of the lack of water for extended periods of time, but I actually love heat in controlled settings. Plus, with 90 minutes of that stuff, you\'re basically the source of your own personal lake. Moving on...');
  }
}

function question4(){
  // 4th question
  var iceAxe = prompt(user + ', how about whether I\'ve self-arrested down snow faces on mountains with an ice axe?');
  console.log('...self-arrest with ice axe? ', iceAxe);

  // 4th question validation if user enters y or yes
  if (iceAxe.toLowerCase() === 'y' || iceAxe.toLowerCase() === 'yes') {
    alert('OK I know I\'m getting lazy. But good guess nonetheless, although it was much less exciting than it sounds. Final question!');

  // 4th question validation if user enters anything else
  } else {
    alert('OK I know I\'m getting lazy. I definitely have, although it was much less exciting than it sounds. Final question!');
  }
}

function question5(){
  // 5th question
  var entity = prompt(user + ', last but not least, am I a digital entity?');
  console.log('entity: ', entity);

  // 5th question response regardless of input
  alert('Whoops another trick. I have no idea! Do you? c; Thanks for taking some time to play the get to know me game! I\'m happy to return the favor. For now, here\'s a little extra info before we part ways. Goodbye!! :D <3');
}

//alert ('I\'d like to test your 6th sense now... Tune into my vibration as well as you are able. I\'m going to give you four guesses to determine which day of the month I was born. It was in August if that makes it easier to feel. Relax, I\'ll give you some hints too :]');

// declaring variables for upcoming loop

function question6(){

  var birthday;
  var counter = 0;
  var answer6 = false;

  // while loop to give user 4 chances
  while (birthday !== 13 && counter < 4) {
    birthday = parseInt(prompt('What day of the month was I born?'));
    counter++;
    console.log('guessed: ', birthday);
    console.log('guess #: ', counter);

    // if loop that determines whether the guess was higher/lower or correct (which breaks loop)
    if (birthday === 13) {
      answer6 = true;
      break;
    } else if (birthday < 13) {
      alert('Nope! Too low c:');
    } else if (birthday > 13) {
      alert('Nope! Too high c:');
      // ADD IN ANOTHER TO CHECK IF THERE ANSWER IS NaN or null and prompt to
    }
  }

  if (answer6 === true) {
    alert('Congrats, you got it! I\'m no guru but your 3rd eye might be open!');
  } else {
    alert('Out of guesses! Nice try, your odds were pretty awful anyways.');
  }
}

//alert('OK! One last question. This is a little more difficult than the others, so you get 6 total guesses. There are a couple correct answers, however. The question is...');

function question7(){
  // 7th question variables
  var cities = ['cabo san lucas', 'cancun', 'tulum', 'mexico city', 'tijuana'];
  var response;
  var guesses = 0;
  var correct = false;

  while (guesses < 6) {
    response = prompt('What\'s a city in Mexico that I\'ve visited?');
    console.log('response:', response);
    if (cities.includes(response.toLowerCase())) {
      correct = true;
      break;
    } else {
      alert('Nope! Guess again.');
      guesses++;
    }
  }

  if (correct === true) {
    alert('WOW nice job! They were all tourist destinations FYI. The possible answers were Cabo (san lucas), Cancun, and Tulum.');
  } else {
    alert('EHHH out of guesses. They were all tourist destinations FYI. The possible answers were Cabo (san lucas), Cancun, and Tulum.');
  }
}

// getting user name
var user = prompt('Welcome, friend! I appreciate that you have an interest in myself. Would you be so kind as to share your name?');
console.log('user name:', user);

// validation of user name entry
alert('Good to know you, ' + user + ' c: I\'ve got an idea. On a whim, I feel like sharing a little bit about me since you took the time to come here. I\'m partial to games though, so please humor me and make a couple guesses. To keep it easier on us both for now, these will all be yes or no questions. Please answer accordingly!');

//running all of the functions in order
question1();
question2();
question3();
question4();
question5();
alert ('I\'d like to test your 6th sense now... Tune into my vibration as well as you are able. I\'m going to give you four guesses to determine which day of the month I was born. It was in August if that makes it easier to feel. Relax, I\'ll give you some hints too :]');
question6();
alert('OK! One last question. This is a little more difficult than the others, so you get 6 total guesses. There are a couple correct answers, however. The question is...');
question7();
>>>>>>> 3f803a4bbea99e533d6741d4ace3a458f7b7a45d

'use strict';
//Beginning of ASSIGNMENT TWO

//Introduction and Rules to my Guessing Game
alert('I want you to play a guessing game. \nThey call it "How well do you know Richard?" \n\nThe only site that knows you care!');
alert('You will be given 5 questions about me.\n\n Answer with a "yes" or "y" or with a "no" or "n"');

//User enters their name
var user = prompt('Well Player, let\'s start by getting your name:');
console.log('User\'s name:', user);

alert('Thank you ' + user + '. Let\'s play!');

//Question 1
var one = prompt('Given the option of mutant abilities, would I want to be able to fly?');
console.log('Question One Answer:', one);

one = one.toLowerCase();

if(one === 'yes' || one === 'y') {
  alert('Nah... I have a reasonable fear of heights that has preserved my health.');
} else if(one === 'no' || one === 'n'){
  alert('That\'s right! Flying is for squirrels and fish.');
};

//Question 2
var two = prompt('Am I tired often?');
console.log('Question Two Answer:', two);

two = two.toLowerCase();

if(two === 'yes' || two === 'y') {
  alert('Yes! Very often. I take a car/boat/bus-ride to class and back.');
} else if(two === 'no' || two === 'n'){
  alert('That\'s incorrect. I\'m so tired. I survive on 15 second micro naps.');
};

//Question 3
var three = prompt('Are lagers my favorite beers?');
console.log('Question Three Answer:', three);

three = three.toLowerCase();

if(three === 'yes' || three === 'y') {
  alert('Nope. IPAs are the right PAs.');
} else if(three === 'no' || three === 'n'){
  alert('That\'s right! IPAs are the right PAs.');
};

//Question 4
var four = prompt('Should they reboot the tv series Firefly?');
console.log('Question Four Answer:', four);

four = four.toLowerCase();

if(four === 'yes' || four === 'y') {
  alert('They absolutely should. Some of us wonder what\'s taking so long.');
} else if(four === 'no' || four === 'n'){
  alert('Honestly, the answer "No" shouldn\'t even be a choice.');
};

//Question 5
var five = prompt('Is money the root of my happiness?');
console.log('Question Five Answer:', five);

five = five.toLowerCase();

if(five === 'yes' || five === 'y') {
  alert('Oh, for sho.');
} else if(five === 'no' || five === 'n'){
  alert('Yea... I guess it isn\'t everything...');
};
//End of ASSIGNMENT TWO

//Beginning of ASSIGNMENT THREE
//Question 6
var number;
var counter = 1;

while(counter < 5){
  number = prompt('About how many IPAs do you think until my body starts to work in reverse?');
  console.log('User Guessed:', number);
  if(isNaN(number) || number === null) {
    alert('Please enter a number.');
  } else if(number < 15) {
    alert(number + '? I can do better than that.');
    counter++;
  } else if(number > 24) {
    alert(number + ' IPAs is how I\'d die. You should guess a smaller number like, 15.');
    counter++;
  } else if(number > 15) {
    alert('I\'m probably getting closer to shitting myself at ' + number + ' IPAs.');
    counter++;
  } else if(Number(number) === 15) {
    alert('Nice!');
    break;
  }
}


/*THIS was an exercise in not reading thoroughly
var user = prompt('What\'s your name again?');
console.log('User\'s name:', user);

alert('So anyways ' + user + '. Soon it will be Halloween. I think it\'s a good idea to make a list of scary things to avoid this year. Thing\'s like Heights, Public Pooping, and Narcissists in Power.');

var list = ['Height\'s', ' Pooping in Public Places', ' Narcissists'];

for(var i = 0 ; i < list.length ; i++){
  var answer = prompt('What else should we add to the Scary List?');
  console.log('Each scary iteration:', answer);
  list.push(' ' + answer);
  if(i === 2) {
    break;
  }
}

alert('The Scary List is Complete!');
alert(list + '.');
THIS is the end of that mishap*/

//Question 7
var flag;
var correct = 0;
var guesses = 0;
var food = ['beer', 'pizza', 'sandwiches', 'mocha', 'cake', 'steak'];

while(guesses < 6) {
  var answer = prompt('What foods or drinks preserve my mental health?');
  answer = answer.toLowerCase();
  guesses++;
  console.log('Number of guesses:', guesses);
  console.log('Guessed: ', answer);
  flag = false;

  for (var i = 0 ; i < food.length ; i++) {
    if (answer === food[i]) {
      alert('Nice Guess! High-Five!');
      correct++;
      flag = true;
    }
  }

  if(flag === false) {
    alert('Nope.');
  }
}
alert('Nice guesses. You got ' + correct + ' correct out of 6');

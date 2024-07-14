// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += parseInt(pointValue);
		 }
	  }
	}
	return `Score for '${word}': ${letterPoints}\n`;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let newPointStructure;

function simpleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = 0;
   letterPoints = parseInt(word.length);

   return `Score for '${word}': ${letterPoints}\n`;
}

function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
   let letterPoints = 0;
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
         letterPoints += 3;
      } else {
         letterPoints += 1;
      }
   }
   return letterPoints = `Score for '${word}': ${letterPoints}\n`
}

let scrabbleScorer;

let simpleScore = {
   name: 'Simple',
   description: 'One point per character',
   scorerFunction: simpleScorer
};

let vowelScorer = {
   name: 'Vowel Bonus',
   description: 'Vowels are worth 3 points',
   scorerFunction: vowelBonusScorer
};

let originalScrabbleScorer = {
   name: 'Scrabble',
   description: 'Uses scrabble point system.',
   scorerFunction: oldScrabbleScorer
};

const scoringAlgorithms = [simpleScore, vowelScorer, originalScrabbleScorer];

function initialPrompt() {
   return input.question("Let's play some Scrabble!\n\nEnter a word to score: ");
}

function scorerPrompt() {
   let algorithmPrompt = input.question(`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: `);
   return scoringAlgorithms[algorithmPrompt].scorerFunction;
}

function transform() {};

function runProgram() {
  let word = initialPrompt();
  let scorerFunction = scorerPrompt();
  console.log(scorerFunction(word));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


//Picks a random word from the word bank
function setRandomWord(){
	return wordBank [wordBank[Math.floor(Math.random()
	*wordBank.length)]
}

//Sets blank spaces equal to the number of letters in the word
function intialSetupForDisplayWord (wrd){
	var cword='';
	for (i=0,i<wrd.length;i++){
		cword=cword + '_';
	}
	return cword

}

//prompts the user for input
function promptUser(c,w){
	var totalChances= w.length;
	var chancesLeft= totalChances-c;
	var l= prompt("So far you have: " + displayWord + 
		". Guess a letter please. You have " +chancesLeft+ 
		" chances left." );
	return l
}

function rebuildDisplayWord (index,wrd,dispwrd){
	var letter=wrd[index];
	dispwrd=dispwrd.split('');
	dispwrd[index]=letter;
	dispwrd=dispwrd.join('');
	return dispwrd;
}
 
//Establishes a list of words for the user to guess
var wordBank = ['ghost','candy','costume',
'vampire','witch','monster']

//Divides the word up by its individual characters to be checked against by user input
word=wordSelector
lettersInside=word.split('');
displayWord=intialSetupForDisplayWord(word);
totalChances=word.length;

while (displayWord != word){
	var guess= promptUser(chancesUsed, word);

	break;
}

while (guess.length > 1 ){
	alert("Choose a letter");
	var guess= promptUser(chancesUsed,word);
}
//Informs the user they lost if they exceed the number of guesses
if (chancesUsed==(word.length)){
	alert("Game Over");
	break;
}

var i=lettersOfWord.indexOf(guess);
if (i !== =1){
	lettersOfWord.splice(i,1);
	displayWord=rebuildDisplayWord 
	(word.indexOf(guess),word,displayWord);
	correct++;
}else{
	chancesUsed++;
}

if (correct==word.length){
	continuePlay==true
}
//Informs user whether they won or lost
if (continueplay== true){
	if (correct== word.length){
		alert("You Win!");
		var playAgain = confirm("Play Again?");
	}else{
		alert("You Lost!");
		var playAgain = confirm("Play Again?");
	}
	if (playAgain){
		location.reload();
	}
}


